import { NextPage } from 'next'
import { VFC } from 'react'

type Props = {
  category: string
}

const Category: VFC<Props> = ({ category }) => {
  return (
    <h2 className='absolute -top-5 left-1/2 px-5 text-xl tracking-[.1em] text-center border-x-2 border-black -translate-x-1/2 sm:text-4xl sm:tracking-[.2em]'>
      {category}
    </h2>
  )
}

export default Category
