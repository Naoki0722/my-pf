import { NextPage } from 'next'
import Image from 'next/image'

const History: NextPage = () => {
  return (
    <div id='history' className='relative history-area py-16'>
      <div className='history-text bg-white w-3/4 mx-auto py-12 px-12 tracking-wider'>
        <h2 className='border-b-2 border-gray-500 pb-4 text-3xl'>経歴</h2>
        <div className='mt-4'>
          <div className='flex w-full'>
            <div className='history-line w-8 mr-8'></div>
            <div className='flex w-5/6 pb-4'>
              <p className='w-28'>1991.7</p>
              <p>誕生</p>
            </div>
          </div>
          <div className='flex w-full'>
            <div className='history-line w-8 mr-8'></div>
            <div className='flex w-5/6 pb-4'>
              <p className='w-28'>2005.4</p>
              <p>弓道に勤しむ中学時代</p>
            </div>
          </div>
          <div className='flex w-full'>
            <div className='history-line w-8 mr-8'></div>
            <div className='flex w-5/6 pb-4'>
              <p className='w-28'>2007.4</p>
              <p>新学校の鹿児島中央高校へ</p>
            </div>
          </div>
          <div className='flex w-full'>
            <div className='history-line w-8 mr-8'></div>
            <div className='flex w-5/6 pb-4'>
              <p className='w-28'>2010.4</p>
              <p>
                大学入学、サイクリング部へ
                <br />
                同年8〜 日本縦断
              </p>
            </div>
          </div>
          <div className='flex w-full'>
            <div className='history-line w-8 mr-8'></div>
            <div className='flex w-5/6 pb-4'>
              <p className='w-28'>2011-13</p>
              <p>四国一周、高野山などを自転車で巡る</p>
            </div>
          </div>
          <div className='flex w-full'>
            <div className='history-line w-8 mr-8'></div>
            <div className='flex w-5/6 pb-4'>
              <p className='w-28'>2013-14</p>
              <p>
                環境問題に着目し、農薬毒性有無を統計的目線で研究
                <br />
                (この頃はバリバリの科学者)
              </p>
            </div>
          </div>
          <div className='flex w-full'>
            <div className='history-line w-8 mr-8'></div>
            <div className='flex w-5/6 pb-4'>
              <p className='w-28'>2014.4</p>
              <p>製薬・化粧品製造業界で仕事を開始</p>
            </div>
          </div>
          <div className='flex w-full'>
            <div className='history-line w-8 mr-8'></div>
            <div className='flex w-5/6 pb-4'>
              <p className='w-28'>2016.9</p>
              <div>
                <p>
                  MA自社開発の会社で仕事
                  <br />
                  [内容]システム導入支援・開発者の支援(リリース対応/データベース周辺作業)
                </p>
                <p className='text-green-400 pt-2'>
                  創業のタイミングで入社
                  <br />
                  ここで未経験でシステム関係の仕事に関わることに。
                </p>
              </div>
            </div>
          </div>
          <div className='flex w-full'>
            <div className='history-line w-8 mr-8'></div>
            <div className='flex w-5/6 pb-4'>
              <p className='w-28'>2017.8</p>
              <p>半導体業界で技術開発の仕事を開始</p>
            </div>
          </div>
          <div className='flex w-full'>
            <div className='history-line w-8 mr-8'></div>
            <div className='flex w-5/6 pb-4'>
              <p className='w-28'>2020.5</p>
              <p>結婚</p>
            </div>
          </div>
          <div className='flex w-full'>
            <div className='history-line w-8 mr-8'></div>
            <div className='flex w-5/6 pb-4'>
              <p className='w-28'>2021.1</p>
              <p>
                副業として業務委託を開始
                <br />
                同年2月〜地方創生や地域貢献に着目し、FJQとしての活動を開始
              </p>
            </div>
          </div>
          <div className='flex w-full'>
            <div className='history-line w-8 mr-8'></div>
            <div className='flex w-5/6 pb-4'>
              <p className='w-28'>2021.5</p>
              <div>
                <p>受託開発の会社で仕事　二足の草鞋でエンジニア業務をこなす</p>
                <p className='text-green-400 pt-2'>
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
      <div className='absolute top-28 left-36'>
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
