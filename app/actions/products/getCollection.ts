'use server';

import prisma from '@/app/utils/prisma';

export const getCollection = async () => {
  try {
    const collection = await prisma.vehicule.findMany();

    return { data: collection };
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong' };
  }
};
