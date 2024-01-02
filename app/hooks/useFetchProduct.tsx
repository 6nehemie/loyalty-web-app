'use client';

import { useEffect, useState } from 'react';
import { getProduct } from '../actions/fleetAction';
import { Car } from '@prisma/client';

const useFetchProduct = (carId: string) => {
  const [product, setProduct] = useState<Car | null>(null);

  useEffect(() => {
    (async () => {
      const response = await getProduct(carId);
      if (response.data) setProduct(response.data);
    })();
  }, [carId]);

  return product;
};
export default useFetchProduct;
