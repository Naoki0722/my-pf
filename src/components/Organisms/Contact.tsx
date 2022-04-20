import { NextPage } from 'next'
import HeadingH2 from '../Atoms/HeadingH2'

const Contact: NextPage = () => {
  return (
    <div id='contact' className='contact-area pt-24 pb-16 relative'>
      <div className='absolute top-7 sm:top-2 left-1/2 transform -translate-x-1/2'>
        <HeadingH2 title='CONTACT' subTitle='お問い合わせ' />
      </div>
      <div className='contact-bg w-4/5 mx-auto flex justify-center'>
        <div className='pt-24 pb-8 sm:w-1/3'>
          <label htmlFor='name' className='block'>
            お名前
          </label>
          <input type='text' className='border w-full h-9 p-3 mb-4' />
          <label htmlFor='email' className='block'>
            メールアドレス
          </label>
          <input type='email' className='border w-full h-9 p-3 mb-4' />
          <label htmlFor='purpose' className='block'>
            ご用件
          </label>
          <select name='purpose' id='purpose' className='border w-full h-9 mb-4'>
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
            className='border w-full p-2'
          ></textarea>
          <button className='block border bg-green-300 px-2 py-2 rounded mx-auto mt-4'>
            送信する
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
