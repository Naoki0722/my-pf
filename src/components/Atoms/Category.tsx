import { NextPage } from 'next'
import { VFC } from 'react'

type Props = {
  category: string
}

const Category: VFC<Props> = ({ category }) => {
  return (
    <h2 className='text-xl sm:text-4xl text-center absolute -top-5 left-1/2 transform -translate-x-1/2 tracking-[.1em] sm:tracking-[.2em] px-5 border-r-2 border-l-2 border-black'>
      {category}
    </h2>
  )
}

export default Category
