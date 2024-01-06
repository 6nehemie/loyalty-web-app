import { WelcomEmail } from '@/app/components/emails/WelcomEmail';
import { Resend } from 'resend';
import * as React from 'react';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, firstName, lastName } = body;

  console.log(email, firstName, lastName);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Loylaty RC <team@loyalty-rc.com>',
      to: [email],
      subject: 'Bienvenue chez Loyalty RC',
      react: WelcomEmail({
        fullName: `${firstName} ${lastName}`,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    console.error(error);
    return Response.json({ error });
  }
}
