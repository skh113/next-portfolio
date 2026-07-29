import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'You are offline',
  description: 'Play a game while you wait for connection.'
};

export default function OfflinePage() {
  return (
    <section className='flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 pb-20 pt-28 md:pt-40 text-center'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-4'>No Internet Connection</h1>
        <p className='text-muted-foreground mb-8'>
          It looks like you are offline. Don&apos;t worry, play this game until
          you are back!
        </p>

        <div className='mx-auto w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-xl'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
          dignissimos provident ab consectetur nemo id enim veritatis tempore
          voluptas modi, sed excepturi adipisci sit animi in, neque labore
          tenetur molestias!
        </div>
      </div>
    </section>
  );
}
