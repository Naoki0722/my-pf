import { NextPage } from 'next'
import Image from 'next/image'

const FirstView: NextPage = () => {
  return (
    <div className='pt-36'>
      <div className='relative first-view'>
        <h2 className='absolute top-1/3 z-10 text-5xl'>“地方創生”―私を動かすキーワード</h2>
        <div className='w-2/3 absolute right-0'>
          <Image src='/images/main.jpg' alt='main' layout='responsive' width={450} height={280} />
        </div>
      </div>
      <h2 className='first-view-h2 text-center text-4xl mt-24 mb-16'>制作への想い</h2>
      <p className='text-center text-xl leading-loose'>
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
