'use server';

import prisma from '@/app/utils/prisma';
import { deleteFile } from '@/app/utils/uploadFile';
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

  await deleteFile(deletedVehicule.carImagePublicId);
  await deleteFile(deletedVehicule.wallpaperPublicId);

  if (!deletedVehicule)
    return { message: 'Vehicule not found', status: StatusCodes.NOT_FOUND };

  return {
    message: 'Vehicule deleted successfully.',
    status: StatusCodes.OK,
  };
};
