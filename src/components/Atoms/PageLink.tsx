import Link from 'next/link'
import React from 'react'

type Props = {
  main: string
  link: string
  sub?: string
  fontSize?: string
}

const PageLink: React.VFC<Props> = ({ main, link, sub, fontSize }) => {
  return (
    <h2 className='mx-2 text-center'>
      <Link href='/projects'>
        <>
          <p className={`mb-1 ${fontSize}`}>{main}</p>
          <p className='text-xs'>{sub}</p>
        </>
      </Link>
    </h2>
  )
}

export default PageLink
