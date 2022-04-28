import { NextPage } from 'next'
import React, { useState } from 'react'
import HeadingH2 from '../Atoms/HeadingH2'

const Contact: NextPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('0')
  const validEmail = () => {
    // email.match()
  }
  const sendMail = async (event: any) => {
    event.preventDefault()
    try {
      const res = await fetch('api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'なおき',
          email: 'matsuzaki@rightcode.co.jp',
          content: 'Test mail.',
        }),
      })
      alert('成功しました')
    } catch (error) {
      console.error('Fetch error : ', error)
      alert('失敗しました')
    }
  }

  return (
    <div id='contact' className='relative pt-24 pb-16 contact-area'>
      <div className='absolute top-7 left-1/2 -translate-x-1/2 sm:top-2'>
        <HeadingH2 title='CONTACT' subTitle='お問い合わせ' />
      </div>
      <form onSubmit={sendMail}>
        <div className='flex justify-center mx-auto w-4/5 2xl:w-3/5 contact-bg'>
          <div className='pt-24 pb-8 sm:w-8/12 lg:w-1/2'>
            <label htmlFor='name' className='block'>
              お名前
            </label>
            <input
              type='text'
              className='p-3 mb-4 w-full h-9 border'
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
            <label htmlFor='email' className='block'>
              メールアドレス
            </label>
            <input
              type='email'
              className='p-3 mb-4 w-full h-9 border'
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              onBlur={validEmail}
            />
            <label htmlFor='purpose' className='block'>
              ご用件
            </label>
            <select
              name='purpose'
              id='purpose'
              className='mb-4 w-full h-9 border'
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
            >
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
              value={content}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
            ></textarea>
            <button
              className='block p-2 mx-auto mt-4 bg-[#D3DFC2] rounded border'
              onClick={sendMail}
            >
              送信する
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact
