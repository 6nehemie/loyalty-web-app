import { redirect } from 'next/navigation';
import prisma from '../utils/prisma';
import { getServerSession } from 'next-auth';

const page = async () => {
  const session = await getServerSession();
  if (!session || !session.user) redirect('/sign-in');

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email as string,
    },
    select: { id: true, currentReservation: true },
  });

  if (!user) redirect('/sign-in');

  // to avoid creating a new reservation if the user already has one
  if (user.currentReservation) {
    const previousReservation = await prisma.reservation.findUnique({
      where: {
        id: user.currentReservation,
      },
    });

    if (!previousReservation?.fufilled) {
      await prisma.reservation.update({
        where: {
          id: user.currentReservation,
        },
        data: {
          additionalDriver: false,
          car: undefined,
          carId: undefined,
          additionalDriverPrice: 0,
          rentalDays: 0,
          startDate: undefined,
          endDate: undefined,
          rentalPrice: 0,
        },
      });

      redirect(`/reservation/${user.currentReservation}`);
    }
  } else {
    const reservation = await prisma.reservation.create({
      data: {
        userId: user?.id,
      },
    });

    await prisma.user.update({
      where: {
        id: user.id as string,
      },
      data: {
        currentReservation: reservation.id,
      },
    });

    redirect(`/reservation/${reservation.id}`);
  }
};
export default page;
