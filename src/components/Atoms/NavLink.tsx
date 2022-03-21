import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  main: string
  link: string
  sub?: string
  fontSize?: string
}

const NavLink: React.VFC<Props> = ({ main, link, sub, fontSize }) => {
  return (
    <h2 className='text-center mx-2'>
      <AnchorLink href={link} offset='50'>
        <p className={`mb-1 ${fontSize}`}>{main}</p>
        <p className='text-xs'>{sub}</p>
      </AnchorLink>
    </h2>
  )
}

export default NavLink
