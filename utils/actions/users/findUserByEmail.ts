'use server';

import prisma from '@/app/utils/prisma';

export const findUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    return user;
  } catch (error) {
    console.error(error);
  }
};
