import { NextPage } from 'next'
import { VFC } from 'react'

type Props = {
  category: string
}

const Category: VFC<Props> = ({ category }) => {
  return (
    <h2 className='text-4xl text-center absolute -top-6 left-1/2 transform -translate-x-1/2 tracking-[.1em]'>
      | {category} |
    </h2>
  )
}

export default Category
