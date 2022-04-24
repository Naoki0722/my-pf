import { NextPage } from 'next'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '　'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

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
        <p className='text-3xl font-bold tracking-[.25em] p-4'>NAOKI MATSUZAKI</p>
        <nav className='menu'>
          <h2 className='text-center py-3 border-t border-black'>
            <AnchorLink
              href='#profile'
              offset='50'
              className='flex justify-between items-center mx-4'
              onClick={moveLink}
            >
              <p className='w-1/2 text-left text-2xl'>ABOUT</p>
              <p className='text-xs w-5/12 text-left'>プロフィール</p>
            </AnchorLink>
          </h2>
          <h2 className='text-center py-3 border-t border-black'>
            <AnchorLink
              href='#history'
              offset='50'
              className='flex justify-between items-center mx-4'
              onClick={moveLink}
            >
              <p className='w-1/2 text-left text-2xl'>HISTORY</p>
              <p className='text-xs w-5/12 text-left'>経歴</p>
            </AnchorLink>
          </h2>
          <h2 className='text-center py-3 border-t border-black'>
            <AnchorLink
              href='#skill'
              offset='50'
              className='flex justify-between items-center mx-4'
              onClick={moveLink}
            >
              <p className='w-1/2 text-left text-2xl'>SKILL</p>
              <p className='text-xs w-5/12 text-left'>できること</p>
            </AnchorLink>
          </h2>
          <h2 className='text-center py-3 border-y border-black'>
            <AnchorLink
              href='#contact'
              offset='50'
              className='flex justify-between items-center mx-4'
              onClick={moveLink}
            >
              <p className='w-1/2 text-left text-2xl'>CONTACT</p>
              <p className='text-xs w-5/12 text-left'>お問い合わせ</p>
            </AnchorLink>
          </h2>
          <div className='flex justify-center mt-2'>
            <FontAwesomeIcon icon={faEnvelope} className='text-4xl mr-4 nav-icon' />
            <FontAwesomeIcon icon={faTwitter} className='text-4xl nav-icon' />
          </div>
        </nav>
        <div className='footer flex justify-center items-end mt-8 pb-4 text-white'>
          <small>©NAOKI MATSUZAKI</small>
        </div>
      </div>
    </div>
  )
}

export default Hamburger
