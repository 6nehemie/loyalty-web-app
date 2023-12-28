import { WelcomEmail } from '@/app/components/emails/WelcomEmail';
import { Resend } from 'resend';
import * as React from 'react';
import { getServerSession } from 'next-auth';
import prisma from '@/app/utils/prisma';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const user = await getServerSession();
    if (!user?.user) return Response.json({ error: 'Must be authenticated' });
    const userEmail = user?.user?.email as string;

    const userData = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
      select: {
        firstName: true,
        lastName: true,
      },
    });

    const fullName = `${userData?.firstName} ${userData?.lastName}`;

    const { data, error } = await resend.emails.send({
      from: 'Loylaty RC <team@loyalty-rc.com>',
      to: [userEmail],
      subject: 'Bienvenue chez Loyalty RC',
      react: WelcomEmail({
        fullName: fullName,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
