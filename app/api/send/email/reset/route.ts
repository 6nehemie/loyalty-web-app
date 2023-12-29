import { WelcomEmail } from '@/app/components/emails/WelcomEmail';
import { Resend } from 'resend';
import * as React from 'react';
import { getServerSession } from 'next-auth';
import prisma from '@/app/utils/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';
import { generateRandomCode } from '@/app/utils/generateRandomCode';
import bcrypt from 'bcryptjs';
import EmailResetTemplate from '@/app/components/emails/EmailResetTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const randomCode = generateRandomCode(6);
  const hashedCode = await bcrypt.hash(randomCode, 10);

  try {
    const session = await getServerSession();
    if (!session || !session.user)
      return new NextResponse('You must be signed in', {
        status: StatusCodes.UNAUTHORIZED,
      });

    const user = await prisma.user.update({
      where: {
        email: session.user.email as string,
      },
      data: {
        emailCodeReset: hashedCode,
      },
      select: {
        email: true,
        firstName: true,
        lastName: true,
      },
    });

    if (!user)
      return new NextResponse('User not found', {
        status: StatusCodes.NOT_FOUND,
      });

    const { data, error } = await resend.emails.send({
      from: 'Loylaty RC <team@loyalty-rc.com>',
      to: [session.user.email as string],
      subject: "Changement d'adresse e-mail - Action Requise",
      react: EmailResetTemplate({
        fullName: `${user!.firstName} ${user!.lastName}`,
        code: randomCode,
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
