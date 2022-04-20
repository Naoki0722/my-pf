import { NextPage } from 'next'
import NavLink from '../Atoms/NavLink'

const Footer: NextPage = () => {
  return (
    <footer className='bg-black text-white pt-16 pb-4 sm:py-16'>
      <nav className='hidden sm:flex justify-center items-end tracking-[.2em]'>
        <NavLink main='ABOUT' link='#profile' />
        <NavLink main='HISTORY' link='#history' />
        <NavLink main='SKILL' link='#skill' />
        {/* <NavLink main='WORKS'></NavLink>
        <NavLink main='REPORT'></NavLink> */}
        <NavLink main='CONTACT' link='#contact' />
      </nav>
      <div className='flex justify-center mt-8'>
        <small>©NAOKI MATSUZAKI</small>
      </div>
    </footer>
  )
}

export default Footer
