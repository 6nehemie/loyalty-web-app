'use server';

import { longFormatFrDate } from '../utils/dates';
import { computesDays } from '../utils/function';
import stripe from '../utils/stripe';

export const createReservation = async (formData: FormData, carChoice: any) => {
  //! need to be converted to Date to be used in the calculation
  const dateFromString = formData.get('from') as string;
  const dateToString = formData.get('to') as string;
  const dateFrom = new Date(dateFromString);
  const dateTo = new Date(dateToString);

  const rentingPrice = carChoice.unit_amount * computesDays(dateFrom, dateTo);

  const reservation = {
    car: carChoice.id,
    from: dateFromString,
    to: dateToString,
    price: rentingPrice,
  };

  try {
    const session = await stripe.checkout.sessions.create({
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: carChoice.currency,
            product_data: {
              name: `Location: ${carChoice.name}, Date: ${longFormatFrDate(
                dateFrom
              )} à ${longFormatFrDate(dateTo)}`,
            },
            unit_amount: rentingPrice,
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
