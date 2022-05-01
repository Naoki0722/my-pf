import { NextPage } from 'next'
import Image from 'next/image'

const ProfileArea1: NextPage = () => {
  return (
    <div className='relative mb-8 h-[700px]'>
      <div className='absolute top-72 left-1/2 z-10 px-4 w-11/12 sm:text-lg lg:top-0 lg:left-1/3 lg:ml-8 lg:w-3/5 transparent-background'>
        <div className='items-center tracking-[.25em] sm:flex sm:mb-4'>
          <h3 className='mr-4 text-3xl'>松﨑 直樹</h3>
          <p>NAOKI MATSUZAKI</p>
        </div>
        <p className='pb-2 border-b-2 border-gray-500 sm:mb-2 lg:mb-8'>エンジニア</p>
        <div className='profile-text'>
          <p className='my-4 text-[15px] leading-relaxed sm:text-base'>
            仕事をきっかけに生まれ育った鹿児島を離れ、現在は福岡に在住。
            <br />
            面白いこと・人がやらなさそうなことに強く惹かれる性格で、”普通”よりも”人と違うこと”が好き。
          </p>
          <p className='my-8 text-[15px] leading-relaxed sm:mt-12 sm:text-base'>
            大学時代はサイクリング部の仲間と自転車での日本縦断を成し遂げました。
            <br />
            今まで培ってきた根性と粘り強さには自信があります。
          </p>
        </div>
      </div>
      <div className='flex relative justify-end items-start mx-auto w-10/12 sm:w-11/12'>
        <div className='block sm:hidden'>
          <Image
            src='/images/profile-main.jpg'
            alt='main'
            width={600}
            height={650}
            objectFit='cover'
            objectPosition='right bottom'
          />
        </div>
        <div className='hidden sm:block'>
          <Image
            src='/images/profile-main.jpg'
            alt='main'
            width={800}
            height={600}
            objectFit='contain'
          />
        </div>
        <div className='absolute -right-5 w-12 sm:-right-24 sm:w-24'>
          <Image
            src='/images/profile.png'
            alt='profile-logo'
            width={70}
            height={300}
            objectFit='contain'
          />
        </div>
      </div>
    </div>
  )
}

export default ProfileArea1
