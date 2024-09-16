import Image from 'next/image';
import authorImage from '@/public/images/authors/keyvan-bw.png';

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Keyvan.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          {/*Beyond all the fancy words,*/}I have a genuine passion for creating
          and being creative. Whether it&apos;s creating music or writing
          complex scripts for websites, I find joy in the process. I have a
          particular love for learning, especially in the field of computer
          science
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Keyvan Hosseini'
          width={175}
          height={187}
          quality={100}
          priority
        />
      </div>
    </section>
  );
}
