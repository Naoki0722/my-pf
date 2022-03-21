import { NextPage } from 'next'
import Image from 'next/image'

const ProfileArea1: NextPage = () => {
  return (
    <div className='relative mb-8'>
      <div className='transparent-background absolute z-10 w-3/5 ml-8'>
        <div className='flex items-center tracking-[.25em] mb-4'>
          <h3 className='text-3xl mr-4'>松﨑 直樹</h3>
          <p>NAOKI MATSUZAKI</p>
        </div>
        <p className='border-b-2 border-gray-500 pb-2 mb-8'>エンジニア</p>
        <div className='profile-text'>
          <p className='my-4 leading-relaxed'>
            仕事をきっかけに生まれ育った鹿児島を離れ、現在は福岡に在住。
            <br />
            面白いこと・人がやらなさそうなことに強く惹かれる性格で、”普通”よりも”人と違うこと”が好き。
          </p>
          <p className='mt-12 mb-8 leading-relaxed'>
            大学時代はサイクリング部の仲間と自転車での日本縦断を成し遂げました。
            <br />
            今まで培ってきた根性と粘り強さには自信があります。
          </p>
        </div>
      </div>
      <div className='flex items-start justify-end'>
        <Image
          src='/images/profile-main.jpg'
          alt='main'
          width={600}
          height={450}
          objectFit='contain'
        />
        <Image
          src='/images/profile.png'
          alt='profile-logo'
          width={70}
          height={300}
          objectFit='contain'
        />
      </div>
    </div>
  )
}

export default ProfileArea1
