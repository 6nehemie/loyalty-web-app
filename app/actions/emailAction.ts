'use server';

import axios from 'axios';

export const welcomeEmail = async (
  email: string,
  firstName: string,
  lastName: string
) => {
  try {
    await axios.post(`${process.env.URL}/api/send/welcome`, {
      email: email,
      firstName: firstName,
      lastName: lastName,
    });

    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error(error);
    return { error: 'Error sending email' };
  }
};
