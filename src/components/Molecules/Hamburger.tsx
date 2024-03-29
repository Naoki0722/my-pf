import { NextPage } from 'next'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '　'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Hamburger: NextPage = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const activeHamburger = () => {
    setOpenMenu((prevState) => !prevState)
  }
  const moveLink = () => {
    setOpenMenu((prevState) => !prevState)
  }

  return (
    <div className='lg:hidden'>
      <div className={openMenu ? 'hamburger active' : 'hamburger'} onClick={activeHamburger}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={openMenu ? 'hamburger-menu active' : 'hamburger-menu'}>
        <p className='p-4 text-3xl font-bold tracking-[.25em]'>NAOKI MATSUZAKI</p>
        <nav>
          <h2 className='py-3 text-center border-t border-black'>
            <AnchorLink
              href='#profile'
              offset='50'
              className='flex justify-between items-center mx-4'
              onClick={moveLink}
            >
              <p className='w-1/2 text-2xl text-left'>ABOUT</p>
              <p className='w-5/12 text-xs text-left'>プロフィール</p>
            </AnchorLink>
          </h2>
          <h2 className='py-3 text-center border-t border-black'>
            <Link href='/projects'>
              <div className='flex justify-between items-center mx-4' onClick={moveLink}>
                <p className='w-1/2 text-2xl text-left'>WORKS</p>
                <p className='w-5/12 text-xs text-left'>プロジェクト履歴</p>
              </div>
            </Link>
          </h2>
          <h2 className='py-3 text-center border-t border-black'>
            <AnchorLink
              href='#skill'
              offset='50'
              className='flex justify-between items-center mx-4'
              onClick={moveLink}
            >
              <p className='w-1/2 text-2xl text-left'>SKILL</p>
              <p className='w-5/12 text-xs text-left'>できること</p>
            </AnchorLink>
          </h2>
          <h2 className='py-3 text-center border-y border-black'>
            <AnchorLink
              href='#contact'
              offset='50'
              className='flex justify-between items-center mx-4'
              onClick={moveLink}
            >
              <p className='w-1/2 text-2xl text-left'>CONTACT</p>
              <p className='w-5/12 text-xs text-left'>お問い合わせ</p>
            </AnchorLink>
          </h2>
          <div className='flex justify-center mt-2'>
            <a href='mailto:mattu.nao722@gmail.com'>
              <FontAwesomeIcon icon={faEnvelope} className='mr-4 text-4xl sp-nav-icon' />
            </a>
            <a href='https://twitter.com/mattu_da' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faTwitter} className='text-4xl sp-nav-icon' />
            </a>
          </div>
        </nav>
        <div className='flex justify-center items-end pb-4 mt-8 text-white footer'>
          <small>©NAOKI MATSUZAKI</small>
        </div>
      </div>
    </div>
  )
}

export default Hamburger
