'use client';

import { useEffect, useState } from 'react';
import { getStripeProducts } from '../actions/getStripeProducts';
import Stripe from 'stripe';

const useFetchStripeProducts = () => {
  const [product, setProduct] = useState<Stripe.Price[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getStripeProducts();
      if (response) setProduct(response);
    })();
  }, []);

  return product;
};
export default useFetchStripeProducts;
