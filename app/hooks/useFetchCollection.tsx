'use client';

import { useEffect, useState } from 'react';
import { getCollection, getProduct } from '../actions/fleetAction';
import { Car } from '@prisma/client';

const useFetchCollection = () => {
  const [product, setProduct] = useState<Car[] | null>(null);

  useEffect(() => {
    (async () => {
      const response = await getCollection();
      if (response.data) setProduct(response.data);
    })();
  }, []);

  return product;
};
export default useFetchCollection;
