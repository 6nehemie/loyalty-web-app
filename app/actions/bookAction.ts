'use server';

import { longFormatFrDate } from '../utils/dates';
import prisma from '../utils/prisma';
import stripe from '../utils/stripe';

export const createReservation = async (reservationId: string) => {
  try {
    const reservation = await prisma.reservation.findUnique({
      where: { id: reservationId },
      include: {
        car: true,
      },
    });

    const totalRentingPrice = (Number(reservation?.car?.price) *
      reservation?.rentalDays!) as number;

    const session = await stripe.checkout.sessions.create({
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: `Location: ${reservation?.car?.brand} ${
                reservation?.car?.model
              }, Date: ${longFormatFrDate(
                reservation?.startDate as Date
              )} à ${longFormatFrDate(reservation?.endDate as Date)}`,
            },
            unit_amount: totalRentingPrice * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
    });

    return { session };
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong' };
  }
};
