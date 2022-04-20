import { NextPage } from 'next'
import Image from 'next/image'

const FirstView: NextPage = () => {
  return (
    <div className='pt-8 sm:pt-36'>
      <div className='relative first-view-sp sm:first-view'>
        <h2 className='absolute top-64 sm:top-1/3 left-5 sm:left-0 z-10 text-3xl sm:text-5xl leading-relaxed sm:leading-normal'>
          “地方創生”
          <br className='sm:hidden' />
          ―私を動かすキーワード
        </h2>
        <div className='w-full sm:w-2/3 absolute right-0'>
          <Image src='/images/main.jpg' alt='main' layout='responsive' width={450} height={280} />
        </div>
      </div>
      <h2 className='first-view-h2 text-center text-4xl mt-20 sm:mt-[25rem] mb-8 sm:mb-16'>
        制作への想い
      </h2>
      <p className='text-center text-lg leading-loose px-5 sm:px-0 sm:mb-8 tracking-tighter sm:tracking-normal'>
        私が目の当たりにしてきたのは、地方の求人の少なさで将来の夢の幅を狭めたり、
        <br />
        都会に出ていってしまう若者が多いという地元の現実。
        <br />
        WEBを仕事にできれば、どこに住んでいてもやりたい仕事を諦めなくていいのに。
        <br />
        そんな想いから、”地方創生”というテーマにWEBの面からアプローチしていくことを目標にしています。
      </p>
    </div>
  )
}

export default FirstView
