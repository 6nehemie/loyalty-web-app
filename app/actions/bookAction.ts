'use server';

import stripe from '../utils/stripe';

export const createReservation = async (formData: FormData, carChoice: any) => {
  const dateFromString = formData.get('from') as string;
  const dateToString = formData.get('to') as string;
  const dateFrom = new Date(dateFromString);
  const dateTo = new Date(dateToString);

  const differenceInTime = dateTo.getTime() - dateFrom.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  console.log(differenceInDays);

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
              name: carChoice.name,
            },
            unit_amount: carChoice.unit_amount,
          },
          quantity: differenceInDays,
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
