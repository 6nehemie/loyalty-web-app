'use server';

import prisma from '../utils/prisma';

export const getUser = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
      },
    });

    return { data: user };
  } catch (error) {
    return { error: error };
  }
};
