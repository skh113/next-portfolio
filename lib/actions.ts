'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { ContactFormSchema, NewsletterFormSchema } from '@/lib/schemas';
import ContactFormEmail from '@/emails/contact-form-email';
import NewSubscriberEmail from '@/emails/new-subscriber-email';

type ContactFormInputs = z.infer<typeof ContactFormSchema>;
type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    const { name, email, message } = result.data;
    const { data, error } = await resend.emails.send({
      from: `Keyvan Hosseini <${process.env.EMAIL_ADDRESS!}>`,
      to: [email],
      cc: ['Keyvan Hosseini', process.env.EMAIL_ADDRESS!],
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message })
    });

    if (!data || error) {
      throw new Error('Failed to send email');
    }

    return { success: true };
  } catch (error) {
    return { error };
  }
}

export async function subscribe(data: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    const { email } = result.data;
    const { data: subscribeData, error: subscribeError } =
      await resend.contacts.create({
        email: email,
        audienceId: process.env.RESEND_AUDIENCE_ID as string
      });

    if (!subscribeData || subscribeError) {
      throw new Error('Failed to subscribe');
    }

    const { data, error } = await resend.emails.send({
      from: `Keyvan Hosseini <${process.env.EMAIL_ADDRESS!}>`,
      to: [email],
      cc: ['Keyvan Hosseini', process.env.EMAIL_ADDRESS!],
      subject: 'Contact form submission',
      react: NewSubscriberEmail()
    });

    if (!data || error) {
      throw new Error('Failed to send email');
    }

    return { success: true };
  } catch (error) {
    return { error };
  }
}
