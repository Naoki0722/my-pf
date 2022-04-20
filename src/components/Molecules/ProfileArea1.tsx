import { NextPage } from 'next'
import Image from 'next/image'

const ProfileArea1: NextPage = () => {
  return (
    <div className='relative mb-8 profile-area'>
      <div className='px-4 transparent-background absolute z-10 w-11/12 sm:w-3/5 sm:ml-8 top-72 sm:top-0 left-1/2 sm:left-1/3 sm:text-lg'>
        <div className='sm:flex items-center tracking-[.25em] sm:mb-4'>
          <h3 className='text-3xl mr-4'>松﨑 直樹</h3>
          <p>NAOKI MATSUZAKI</p>
        </div>
        <p className='border-b-2 border-gray-500 pb-2 mb-8'>エンジニア</p>
        <div className='profile-text'>
          <p className='my-4 sm:leading-relaxed'>
            仕事をきっかけに生まれ育った鹿児島を離れ、現在は福岡に在住。
            <br />
            面白いこと・人がやらなさそうなことに強く惹かれる性格で、”普通”よりも”人と違うこと”が好き。
          </p>
          <p className='mt-8 sm:mt-12 mb-8 sm:leading-relaxed'>
            大学時代はサイクリング部の仲間と自転車での日本縦断を成し遂げました。
            <br />
            今まで培ってきた根性と粘り強さには自信があります。
          </p>
        </div>
      </div>
      <div className='flex items-start justify-end w-10/12 sm:w-11/12 mx-auto relative'>
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
        <div className='absolute w-12 sm:w-24 -right-5 sm:-right-24'>
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
