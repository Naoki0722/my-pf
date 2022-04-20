import { NextPage } from 'next'
import SiteTitle from '../Atoms/SiteTitle'
import Navigation from '../Molecules/Navigation'
import { FontAwesomeIcon } from '　'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Header: NextPage = () => {
  return (
    <>
      <header className='flex justify-center sm:justify-between items-end border-b-2 border-gray-500 pt-8 sm:pb-2 mx-4 sm:mx-24'>
        <SiteTitle></SiteTitle>
        <Navigation></Navigation>
      </header>
      <div className='flex justify-end mt-2 mr-8 sm:hidden'>
        <FontAwesomeIcon icon={faEnvelope} className='text-4xl mr-4 nav-icon' />
        <FontAwesomeIcon icon={faTwitter} className='text-4xl nav-icon' />
      </div>
    </>
  )
}

export default Header
