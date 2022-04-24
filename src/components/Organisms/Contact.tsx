import { NextPage } from 'next'
import HeadingH2 from '../Atoms/HeadingH2'

const Contact: NextPage = () => {
  return (
    <div id='contact' className='relative pt-24 pb-16 contact-area'>
      <div className='absolute top-7 left-1/2 -translate-x-1/2 sm:top-2'>
        <HeadingH2 title='CONTACT' subTitle='お問い合わせ' />
      </div>
      <div className='flex justify-center mx-auto w-4/5 2xl:w-3/5 contact-bg'>
        <div className='pt-24 pb-8 sm:w-8/12 lg:w-1/2'>
          <label htmlFor='name' className='block'>
            お名前
          </label>
          <input type='text' className='p-3 mb-4 w-full h-9 border' />
          <label htmlFor='email' className='block'>
            メールアドレス
          </label>
          <input type='email' className='p-3 mb-4 w-full h-9 border' />
          <label htmlFor='purpose' className='block'>
            ご用件
          </label>
          <select name='purpose' id='purpose' className='mb-4 w-full h-9 border'>
            <option value='0'>選択してください</option>
            <option value='1'>お仕事のご依頼</option>
            <option value='2'>ご相談</option>
          </select>
          <label htmlFor='contents' className='block'>
            内容
          </label>
          <textarea
            name='contents'
            id='contents'
            cols={30}
            rows={10}
            className='p-2 w-full border'
          ></textarea>
          <button className='block p-2 mx-auto mt-4 bg-[#D3DFC2] rounded border'>
            送信する
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
