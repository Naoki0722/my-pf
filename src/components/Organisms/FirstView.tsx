import { NextPage } from 'next'
import Image from 'next/image'

const FirstView: NextPage = () => {
  return (
    <div className='pt-8 lg:pt-36'>
      <div className='relative h-[400px] sm:h-[500px] lg:h-[600px] 2xl:h-[800px]'>
        <h2 className='absolute top-[17rem] left-5 z-10 text-3xl leading-relaxed sm:top-[24rem] sm:left-0 sm:leading-normal lg:top-1/3 lg:text-5xl'>
          “地方創生”
          <br className='sm:hidden' />
          ―私を動かすキーワード
        </h2>
        <div className='absolute right-0 w-full lg:w-2/3'>
          <Image src='/images/main.jpg' alt='main' layout='responsive' width={450} height={280} />
        </div>
      </div>
      <h2 className='mb-8 text-4xl text-center sm:mb-16 first-view-h2'>制作への想い</h2>
      <p className='px-4 text-xl tracking-[-0.1em] leading-loose text-center sm:px-0 sm:mb-8 sm:tracking-normal'>
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
