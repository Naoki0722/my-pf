import { NextPage } from 'next'
import Image from 'next/image'

const ProfileArea2: NextPage = () => {
  return (
    <div className='relative mb-20 h-[880px] lg:h-[750px]'>
      <div className='flex items-start justify-start w-9/12 sm:w-11/12 mx-auto relative'>
        <Image
          src='/images/profile-description.png'
          alt='profile-description'
          width={600}
          height={650}
          objectFit='cover'
          objectPosition='left bottom'
        />
      </div>
      <div className='px-4 profile-text transparent-background absolute top-60 sm:top-[25rem] lg:top-28 lg:right-32 z-10 w-11/12 lg:w-3/5 left-1/2 lg:left-[60%] lg:text-lg'>
        <p className='my-4 sm:my-12 leading-loose text-[15px] sm:text-base'>
          私が大切にしているのは家族と、地域での社会活動です。
          <br />
          現在は「NPO法人・ファザーリング・ジャパン九州」「福岡テンジン大学」という組織でボランティア活動に参加しています。
          <br />
          新たな人との出会いがあったり、面白い発見が出来るので、これからも積極的に参加していこうと思っています。
        </p>
        <p className='my-8 leading-loose text-[15px] sm:text-base'>
          その経験から、地方の活性化にWEB業界から貢献したいという想いが強くなりました。
          <br />
          ものづくりが好きなこともあり、2021年から元々経験のあったエンジニアの仕事を再開しました。
        </p>
        <p className='mt-8 sm:mt-12 mb-12 leading-loose text-[15px] sm:text-base'>
          現在の仕事以外にも、様々な業界での経験があるので、エンジニア以外の目線でサービス提供ができることが強みだと思っています。
          <br />
          業務をこなしながら新しい技術を勉強している日々ですが、将来的にはフルスタックエンジニアを目指しています。
        </p>
      </div>
    </div>
  )
}

export default ProfileArea2
