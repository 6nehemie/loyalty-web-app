'use server';

import prisma from '@/app/utils/prisma';
import { StatusCodes } from 'http-status-codes';

export const deleteVehicule = async (vehiculeId: string) => {
  if (!vehiculeId)
    return {
      message: 'The vehicule id is required',
      status: StatusCodes.BAD_REQUEST,
    };

  const deletedVehicule = await prisma.vehicule.delete({
    where: { id: vehiculeId },
  });

  if (!deletedVehicule)
    return { message: 'Vehicule not found', status: StatusCodes.NOT_FOUND };

  return {
    message: 'Vehicule deleted successfully.',
    status: StatusCodes.OK,
  };
};
