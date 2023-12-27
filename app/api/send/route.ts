import { CreateAccountTemplate } from '@/app/components/emails/CreateAccountTemplate';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const userEmail = 'nehemie.mbg@gmail.com';

  try {
    const { data, error } = await resend.emails.send({
      from: 'Loylaty RC <team@loyalty-rc.com>',
      to: [userEmail],
      subject: 'Hello world',
      react: CreateAccountTemplate({
        firstName: 'Nehemie',
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
