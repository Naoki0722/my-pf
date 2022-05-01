import { NextPage } from 'next'
import { SubmitHandler, useForm } from 'react-hook-form'
import React, { useState } from 'react'
import HeadingH2 from '../Atoms/HeadingH2'

type FormState = {
  name: string
  email: string
  contents: string
  category: string
}

const Contact: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormState>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      contents: '',
      category: '',
    },
  })

  const [isLoading, setIsLoading] = useState(false)
  const sendMail: SubmitHandler<FormState> = async (data) => {
    setIsLoading((prevState) => !prevState)
    const res = await fetch('api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        content: data.contents,
        category: data.category,
      }),
    })
    if (res.ok) {
      alert('送信成功しました')
      reset()
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      alert('失敗しました')
    }
    setIsLoading((prevState) => !prevState)
  }

  return (
    <div id='contact' className='relative pt-24 pb-16 contact-area'>
      <div className='absolute top-7 left-1/2 -translate-x-1/2 sm:top-2'>
        <HeadingH2 title='CONTACT' subTitle='お問い合わせ' />
      </div>
      <form onSubmit={handleSubmit(sendMail)}>
        <div className='flex justify-center mx-auto w-4/5 2xl:w-3/5 contact-bg'>
          <div className='pt-24 pb-8 mx-4 sm:w-8/12 lg:w-1/2'>
            <label htmlFor='name' className='block'>
              お名前
            </label>
            <input
              className='p-3 mb-4 w-full h-9 placeholder:text-[#D3DFC2] rounded-none border border-black'
              type='text'
              placeholder='山田 太郎'
              {...register('name', { required: true })}
            />
            {errors.name && <span className='text-red-500'>必須項目です</span>}
            <label htmlFor='email' className='block'>
              メールアドレス
            </label>
            <input
              className='p-3 mb-4 w-full h-9 placeholder:text-[#D3DFC2] rounded-none border border-black'
              type='email'
              placeholder='Mail'
              {...register('email', { required: true })}
            />
            {errors.email && <span className='text-red-500'>必須項目です</span>}
            <label htmlFor='category' className='block'>
              ご用件
            </label>
            <select
              id='category'
              className='mb-4 w-full h-9 placeholder:text-[#D3DFC2] bg-white rounded-none border border-black'
              {...register('category', { required: true })}
            >
              <option value=''>選択してください</option>
              <option value='work'>お仕事のご依頼</option>
              <option value='consultation'>ご相談</option>
              <option value='other'>その他</option>
            </select>
            {errors.category && <span className='text-red-500'>必須項目です</span>}
            <label htmlFor='contents' className='block'>
              内容
            </label>
            <textarea
              id='contents'
              cols={30}
              rows={10}
              className='p-2 w-full placeholder:text-[#D3DFC2] rounded-none border border-black'
              placeholder='内容'
              {...register('contents', { required: true })}
            ></textarea>
            {errors.contents && <span className='text-red-500'>必須項目です</span>}
            <button className='block p-2 mx-auto mt-4 bg-[#D3DFC2] rounded border'>
              <div className={isLoading ? 'flex justify-center' : 'hidden'}>
                <div className='w-8 h-8 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin' />
              </div>
              <div className={isLoading ? 'hidden' : ''}>送信する</div>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact
