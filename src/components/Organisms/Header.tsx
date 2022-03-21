import { NextPage } from 'next'
import SiteTitle from '../Atoms/SiteTitle'
import Navigation from '../Molecules/Navigation'

const Header: NextPage = () => {
  return (
    <header className='flex justify-between items-end border-b-2 border-gray-500 pt-8 pb-2 sm:mx-24'>
      <SiteTitle></SiteTitle>
      <Navigation></Navigation>
    </header>
  )
}

export default Header
