import { NextPage } from 'next'
import SiteTitle from '../Atoms/SiteTitle'
import Navigation from '../Molecules/Navigation'
import { FontAwesomeIcon } from '　'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Header: NextPage = () => {
  return (
    <>
      <header className='flex justify-center items-end pt-8 mx-4 border-b-2 border-gray-500 sm:justify-between sm:pb-2 sm:mx-8 lg:mx-24'>
        <SiteTitle></SiteTitle>
        <Navigation></Navigation>
      </header>
      <div className='flex justify-end mt-2 mr-8 lg:hidden'>
        <a href='mailto:mattu.nao722@gmail.com'>
          <FontAwesomeIcon icon={faEnvelope} className='mr-4 text-4xl nav-icon' />
        </a>
        <a href='https://twitter.com/mattu_da' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faTwitter} className='text-4xl nav-icon' />
        </a>
      </div>
    </>
  )
}

export default Header
