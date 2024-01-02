'use server';

export const createReservation = async (formData: FormData) => {
  console.log(formData);

  try {
    return { data: 'The reservation was successful' };
  } catch (error) {
    // console.error(error);
    return { error: 'User not found' };
  }
};
