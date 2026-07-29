import type { Metadata } from 'next';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <section className='pb-20 pt-28 md:pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Privacy Policy</h1>

        <div className='prose prose-zinc dark:prose-invert max-w-none'>
          <h2 className='lead font-light text-justify'>
            I believe in privacy by default. This website is a static portfolio
            designed to showcase my work, not to track your digital footprint.
            Here is exactly what information is collected and why.
          </h2>

          <h3>1. Error Logging (Sentry)</h3>
          <p>
            To ensure this website runs smoothly, I use a service called{' '}
            <strong>Sentry</strong>. If the application crashes or encounters a
            significant error while you are browsing, Sentry collects technical
            data to help me fix the bug.
          </p>
          <p>
            This data is strictly technical (e.g., browser version, operating
            system, and the stack trace of the error). It does not include your
            personal information or browsing history.
          </p>

          <h3>2. Contact Forms</h3>
          <p>
            I only collect personal information that you voluntarily provide. If
            you use the
            <Link
              href='/contact'
              className='text-primary underline underline-offset-4 hover:text-primary/80 mx-1'
            >
              Contact Form
            </Link>
            or subscribe to the newsletter, I receive the name and email address
            you enter.
          </p>
          <ul>
            <li>
              This data is used <strong>solely</strong> to reply to your message
              or send you the updates you requested.
            </li>
            <li>
              I do not sell, trade, or share your email address with third
              parties.
            </li>
          </ul>

          <h3>3. No Other Tracking</h3>
          <p>
            Aside from the technical logs mentioned above and the information
            you explicitly send me,
            <strong>no other personal data is collected</strong>. I do not use
            advertising cookies or third-party behavioral tracking scripts.
          </p>

          <hr className='my-8 border-muted' />

          <p className='text-sm text-muted-foreground'>
            Last Updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric'
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How I handle your data on this portfolio.'
};
