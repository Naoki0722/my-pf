import { NextPage } from 'next'
import { useRouter } from 'next/router'
import NavLink from '../Atoms/NavLink'

const Footer: NextPage = () => {
  const router = useRouter()

  return (
    <footer className='pt-16 pb-4 text-white bg-black sm:py-16'>
      {router.pathname === '/projects' ? null : (
        <nav className='hidden justify-center items-end tracking-[.2em] sm:flex'>
          <NavLink main='ABOUT' link='#profile' fontSize='sm:text-sm lg:text-base' />
          <NavLink main='WORKS' link='#project' fontSize='sm:text-sm lg:text-base' />
          <NavLink main='SKILL' link='#skill' fontSize='sm:text-sm lg:text-base' />
          {/* <NavLink main='WORKS'></NavLink>
            <NavLink main='REPORT'></NavLink> */}
          <NavLink main='CONTACT' link='#contact' fontSize='sm:text-sm lg:text-base' />
        </nav>
      )}

      <div className='flex justify-center mt-8'>
        <small>©NAOKI MATSUZAKI</small>
      </div>
    </footer>
  )
}

export default Footer
