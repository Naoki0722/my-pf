import { NextPage } from 'next'
import NavIcon from '../Atoms/NavIcon'
import NavLink from '../Atoms/NavLink'

const Navigation: NextPage = () => {
  return (
    <nav className='hidden justify-around items-end tracking-[.2em] lg:flex'>
      <NavLink main='ABOUT' sub='プロフィール' fontSize='text-2xl' link='#profile' />
      <NavLink main='HISTORY' sub='経歴' fontSize='text-2xl' link='#history' />
      <NavLink main='SKILL' sub='できること' fontSize='text-2xl' link='#skill' />
      {/* <NavLink main='WORKS' sub='プロジェクト履歴' fontSize='text-2xl' link='#works' />
      <NavLink main='REPORT' sub='記事' fontSize='text-2xl' link='#report' /> */}
      <NavLink main='CONTACT' sub='お問い合わせ' fontSize='text-2xl' link='#contact' />
      <NavIcon></NavIcon>
    </nav>
  )
}

export default Navigation
