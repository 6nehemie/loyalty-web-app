'use server';

import stripe from '../utils/stripe';

export const getStripeProducts = async () => {
  const res = await stripe.prices.list({
    expand: ['data.product'],
  });
  const prices = res.data;
  return prices;
};
