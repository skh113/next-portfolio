import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'

export default function Header() {
  const headerItems: {
    link: string
    label: string
  }[] = [
    { link: '/posts', label: 'Posts' },
    { link: '/projects', label: 'Projects' },
    { link: '/contact', label: 'Contact' }
  ]

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>
            SKH
          </Link>
        </div>

        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10'>
          {headerItems.map(({ label, link }, index) => (
            <li key={index} className='transition-colors hover:text-foreground'>
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
