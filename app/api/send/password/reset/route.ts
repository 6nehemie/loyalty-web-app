import { ResetPasswordTemplate } from '@/app/components/emails/ResetPasswordTemplate';
import { Resend } from 'resend';
import * as React from 'react';
import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, password } = await req.json();

  if (!email || !password)
    return NextResponse.json(
      { error: 'Email or password is missing' },
      { status: StatusCodes.BAD_REQUEST }
    );

  try {
    const { data, error } = await resend.emails.send({
      from: 'Loylaty RC <team@loyalty-rc.com>',
      to: ['nehemie.mbg@gmail.com'],
      subject: 'Rénitialisation de votre mot de passe',
      react: ResetPasswordTemplate({
        password,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error: 'something went wrong' });
    }

    return Response.json({ data: 'Email sent successfully' });
  } catch (error) {
    return Response.json({ error: 'something went wrong' });
  }
}
