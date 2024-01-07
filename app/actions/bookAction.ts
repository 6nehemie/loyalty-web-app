'use server';

import { longFormatFrDate } from '../utils/dates';
import prisma from '../utils/prisma';
import stripe from '../utils/stripe';

export const createReservation = async (reservationId: string) => {
  const domain =
    process.env.NODE_ENV === 'development'
      ? process.env.URL
      : process.env.DOMAIN;

  try {
    const reservation = await prisma.reservation.findUnique({
      where: { id: reservationId },
      include: {
        car: true,
        user: true,
      },
    });

    const totalRentingPrice = (Number(reservation?.car?.price) *
      reservation?.rentalDays!) as number;

    const customer = await stripe.customers.create({
      email: reservation!.user!.email!,
      name: `${reservation?.user?.firstName} ${reservation?.user?.lastName}`,
      phone: reservation?.user?.phoneNumber || undefined,
      address: {
        line1: reservation?.user?.addressLine1 || undefined,
        city: reservation?.user?.city || undefined,
        postal_code: reservation?.user?.postalCode || undefined,
        country: reservation?.user?.country || undefined,
      },
    });

    const session = await stripe.checkout.sessions.create({
      success_url: `${domain}/success`,
      cancel_url: `${domain}/cancel`,
      customer: customer.id,
      billing_address_collection: 'required',
      phone_number_collection: {
        enabled: true,
      },
      payment_method_types: ['card'],

      metadata: {
        additionalDriver: reservation!.additionalDriver ? 'Yes' : 'No',
        rentalDays: reservation!.rentalDays,
        startDate: reservation!.startDate!.toISOString(),
        endDate: reservation!.endDate!.toISOString(),
      },
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

    await prisma.reservation.update({
      where: { id: reservationId },
      data: {
        checkoutSessionId: session.id,
        paymentStatus: 'Processing',
      },
    });

    return { session };
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong' };
  }
};
