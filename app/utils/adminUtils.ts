'use server';

import { getServerSession } from 'next-auth';
import { RoleType } from '../types';
import prisma from './prisma';
import { redirect } from 'next/navigation';

export const isAdmin = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        role: true,
      },
    });

    if (user?.role !== ('ADMIN' as RoleType)) redirect('/');
  } catch (error) {
    console.error(error);
    redirect('/');
  }
};

export const getAdminUser = async () => {
  try {
    const session = await getServerSession();

    if (!session || !session.user) throw new Error('No session found');

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
      },
    });

    return user;
  } catch (error) {
    console.error(error);
    redirect('/');
  }
};
