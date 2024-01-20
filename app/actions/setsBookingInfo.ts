'use server';

import { calculateTotalPrice, computesDays } from '../utils/function';
import prisma from '../utils/prisma';

export const fetchBookingInfo = async (reservationId: string) => {
  try {
    const response = await prisma.reservation.findUnique({
      where: {
        id: reservationId,
      },
      include: {
        vehicule: true,
      },
    });

    // Calculate the renting price
    const carRentingPrice = response?.vehicule?.dailyPrice || 0;
    const dateFrom = response?.startDate || new Date();
    const dateTo = response?.endDate || new Date();
    const rentingPrice =
      Number(carRentingPrice) * computesDays(dateFrom, dateTo);

    const additionalDriverPrice = response?.additionalDriverPrice || 0;

    const totalCost = calculateTotalPrice(rentingPrice, additionalDriverPrice);

    return { data: response, totalCost, message: 'Reservation found' };
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong' };
  }
};

export const setBookingDates = async (
  from: string,
  to: string,
  reservationId: string
) => {
  try {
    const startDate = new Date(from);
    const endDate = new Date(to);

    await prisma.reservation.update({
      where: {
        id: reservationId,
      },
      data: {
        startDate: startDate,
        endDate: endDate,
        rentalDays: computesDays(startDate, endDate),
      },
    });

    return { message: 'Dates set successfully' };
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong' };
  }
};

export const setBookingCarChoice = async (
  carId: string,
  reservationId: string
) => {
  try {
    await prisma.reservation.update({
      where: {
        id: reservationId,
      },
      data: {
        vehiculeId: carId,
      },
    });

    return { message: 'Car choice set successfully' };
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong' };
  }
};

export const setBookingExtra = async (
  addDriver: boolean,
  reservationId: string
) => {
  try {
    await prisma.reservation.update({
      where: {
        id: reservationId,
      },
      data: {
        additionalDriver: addDriver,
      },
    });

    return { message: 'Extras choice set successfully' };
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong' };
  }
};
