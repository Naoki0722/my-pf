import { NextPage } from 'next'
import Image from 'next/image'

const History: NextPage = () => {
  return (
    <div id='history' className='relative py-8 history-area sm:py-18'>
      <div className='py-8 px-3 mx-auto w-11/12 tracking-wider bg-white sm:p-12 sm:my-12 sm:w-3/4 history-text'>
        <h2 className='pb-4 text-3xl border-b-2 border-gray-500 sm:text-4xl'>経歴</h2>
        <div className='relative z-10 mt-4'>
          <div className='flex w-full text-xs sm:text-base xl:text-lg 2xl:text-xl'>
            <div className='w-3 sm:mr-8 sm:w-8 history-line'></div>
            <div className='flex pb-4 sm:w-5/6'>
              <p className='w-20 sm:w-44 sm:tracking-[0.2rem]'>1991.7</p>
              <p className='w-56 sm:w-full'>誕生</p>
            </div>
          </div>
          <div className='flex w-full text-xs sm:text-base xl:text-lg 2xl:text-xl'>
            <div className='w-3 sm:mr-8 sm:w-8 history-line'></div>
            <div className='flex pb-4 sm:w-5/6'>
              <p className='w-20 sm:w-44 sm:tracking-[0.2rem]'>2005.4</p>
              <p className='w-56 sm:w-full'>弓道に勤しむ中学時代</p>
            </div>
          </div>
          <div className='flex w-full text-xs sm:text-base xl:text-lg 2xl:text-xl'>
            <div className='w-3 sm:mr-8 sm:w-8 history-line'></div>
            <div className='flex pb-4 sm:w-5/6'>
              <p className='w-20 sm:w-44 sm:tracking-[0.2rem]'>2007.4</p>
              <p className='w-56 sm:w-full'>新学校の鹿児島中央高校へ</p>
            </div>
          </div>
          <div className='flex w-full text-xs sm:text-base xl:text-lg 2xl:text-xl'>
            <div className='w-3 sm:mr-8 sm:w-8 history-line'></div>
            <div className='flex pb-4 sm:w-5/6'>
              <p className='w-20 sm:w-44 sm:tracking-[0.2rem]'>2010.4</p>
              <p className='w-56 sm:w-full'>
                大学入学、サイクリング部へ
                <br />
                同年8〜 日本縦断
              </p>
            </div>
          </div>
          <div className='flex w-full text-xs sm:text-base xl:text-lg 2xl:text-xl'>
            <div className='w-3 sm:mr-8 sm:w-8 history-line'></div>
            <div className='flex pb-4 sm:w-5/6'>
              <p className='w-20 sm:w-44 sm:tracking-[0.2rem]'>2011-13</p>
              <p className='w-56 sm:w-full'>四国一周、高野山などを自転車で巡る</p>
            </div>
          </div>
          <div className='flex w-full text-xs sm:text-base xl:text-lg 2xl:text-xl'>
            <div className='w-3 sm:mr-8 sm:w-8 history-line'></div>
            <div className='flex pb-4 sm:w-5/6'>
              <p className='w-20 sm:w-44 sm:tracking-[0.2rem]'>2013-14</p>
              <p className='w-56 sm:w-full'>
                環境問題に着目し、農薬毒性有無を統計的目線で研究
                <br />
                (この頃はバリバリの科学者)
              </p>
            </div>
          </div>
          <div className='flex w-full text-xs sm:text-base xl:text-lg 2xl:text-xl'>
            <div className='w-3 sm:mr-8 sm:w-8 history-line'></div>
            <div className='flex pb-4 sm:w-5/6'>
              <p className='w-20 sm:w-44 sm:tracking-[0.2rem]'>2014.4</p>
              <p className='w-56 sm:w-full'>製薬・化粧品製造業界で仕事を開始</p>
            </div>
          </div>
          <div className='flex w-full text-xs sm:text-base xl:text-lg 2xl:text-xl'>
            <div className='w-3 sm:mr-8 sm:w-8 history-line'></div>
            <div className='flex pb-4 sm:w-5/6'>
              <p className='w-20 sm:w-44 sm:tracking-[0.2rem]'>2016.9</p>
              <div className='w-56 sm:w-full'>
                <p>
                  MA自社開発の会社で仕事
                  <br />
                  [内容]システム導入支援・開発者の支援(リリース対応/データベース周辺作業)
                </p>
                <p className='pt-2 text-[#68B7A1]'>
                  創業のタイミングで入社
                  <br />
                  ここで未経験でシステム関係の仕事に関わることに。
                </p>
              </div>
            </div>
          </div>
          <div className='flex w-full text-xs sm:text-base xl:text-lg 2xl:text-xl'>
            <div className='w-3 sm:mr-8 sm:w-8 history-line'></div>
            <div className='flex pb-4 sm:w-5/6'>
              <p className='w-20 sm:w-44 sm:tracking-[0.2rem]'>2017.8</p>
              <p className='w-56 sm:w-full'>半導体業界で技術開発の仕事を開始</p>
            </div>
          </div>
          <div className='flex w-full text-xs sm:text-base xl:text-lg 2xl:text-xl'>
            <div className='w-3 sm:mr-8 sm:w-8 history-line'></div>
            <div className='flex pb-4 sm:w-5/6'>
              <p className='w-20 sm:w-44 sm:tracking-[0.2rem]'>2020.5</p>
              <p className='w-56 sm:w-full'>結婚</p>
            </div>
          </div>
          <div className='flex w-full text-xs sm:text-base xl:text-lg 2xl:text-xl'>
            <div className='w-3 sm:mr-8 sm:w-8 history-line'></div>
            <div className='flex pb-4 sm:w-5/6'>
              <p className='w-20 sm:w-44 sm:tracking-[0.2rem]'>2021.1</p>
              <p className='w-56 sm:w-full'>
                副業として業務委託を開始
                <br />
                同年2月〜地方創生や地域貢献に着目し、FJQとしての活動を開始
              </p>
            </div>
          </div>
          <div className='flex w-full text-xs sm:text-base xl:text-lg 2xl:text-xl'>
            <div className='w-3 sm:mr-8 sm:w-8 history-line'></div>
            <div className='flex pb-4 sm:w-5/6'>
              <p className='w-20 sm:w-44 sm:tracking-[0.2rem]'>2021.5</p>
              <div className='w-56 sm:w-full'>
                <p>受託開発の会社で仕事　二足の草鞋でエンジニア業務をこなす</p>
                <p className='pt-2 text-[#68B7A1]'>
                  2016年に少し経験済みですが、ここで再度エンジニアとしての人生がスタート。
                  <br />
                  地方創生という観点で関わっていきたいという想いと、
                  <br />
                  何かを作るのがやっぱり好きという理由から。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute top-[8.2rem] left-7 w-12 sm:top-[12.5rem] sm:left-[10rem] lg:top-28 lg:left-0 lg:w-[10rem] xl:left-36 2xl:left-52'>
        <Image
          src='/images/history-logo.png'
          alt='history-logo'
          width={70}
          height={300}
          objectFit='contain'
        />
      </div>
    </div>
  )
}

export default History
