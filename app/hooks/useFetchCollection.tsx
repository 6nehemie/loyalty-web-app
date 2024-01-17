'use client';

import { useEffect, useState } from 'react';

import { Car } from '@prisma/client';
import { IVehicule } from '../types';
import { getCollection } from '../actions/products/getCollection';

const useFetchCollection = () => {
  const [product, setProduct] = useState<IVehicule[] | null>(null);

  useEffect(() => {
    (async () => {
      const response = await getCollection();
      if (response.data) setProduct(response.data);
    })();
  }, []);

  return product;
};
export default useFetchCollection;
