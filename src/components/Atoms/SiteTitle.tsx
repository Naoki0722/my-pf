import { NextPage } from 'next'
import Link from 'next/link'

const SiteTitle: NextPage = () => {
  return (
    <h1 className='mt-4 text-3xl font-bold tracking-[.15em] sm:mt-0 sm:text-4xl sm:tracking-[.25em]'>
      <Link href='/'>NAOKI MATSUZAKI</Link>
    </h1>
  )
}

export default SiteTitle
