import type { NextPage } from 'next'
import Hamburger from '../src/components/Molecules/Hamburger'
import Contact from '../src/components/Organisms/Contact'
import FirstView from '../src/components/Organisms/FirstView'
import Footer from '../src/components/Organisms/Footer'
import Header from '../src/components/Organisms/Header'
import History from '../src/components/Organisms/History'
import Profile from '../src/components/Organisms/Profile'
import Project from '../src/components/Organisms/Project'
import Report from '../src/components/Organisms/Report'
import Skill from '../src/components/Organisms/Skill'
import ReturnButton from '../src/components/Molecules/ReturnButton'

const Home: NextPage = () => {
  return (
    <>
      <ReturnButton />
      <Hamburger></Hamburger>
      <div className='z-20 w-full lg:block lg:fixed bg-header'>
        <Header></Header>
      </div>
      <div className='sm:mx-24'>
        <FirstView></FirstView>
        <Profile></Profile>
      </div>
      <History></History>
      <Skill></Skill>
      {/* 下記はまだ実装しないためコメントアウトしておく */}
      {/* <Project></Project>
      <Report></Report> */}
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default Home
