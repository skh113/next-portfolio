import Image from 'next/image';
import Link from 'next/link';
import authorImage from '@/public/images/authors/keyvan-bw.png';
import { Button } from './ui/button';

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-20 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Keyvan.</h1>
        <p className='my-3 font-light text-muted-foreground text-justify'>
          {/*Beyond all the fancy words,*/}I have a genuine passion for creating
          and being creative. Whether it&apos;s creating music or writing
          complex scripts for websites, I find joy in the process. I have a
          particular love for learning, especially in the field of computer
          science.
        </p>
        <div className='flex gap-2'>
          <Button className='py-3 px-5'>
            <Link
              download
              href={{
                pathname:
                  '/resume/Seyed Keyvan Hosseini Resume - Frontend Developer.pdf'
              }}
              target='_blank'
            >
              Download Resume
            </Link>
          </Button>
          <Button variant='link' className='py-3 px-5'>
            <Link href='/projects'>Projects</Link>
          </Button>
        </div>
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
