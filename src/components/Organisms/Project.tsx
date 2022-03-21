import { NextPage } from 'next'
import HeadingH2 from '../Atoms/HeadingH2'

const Project: NextPage = () => {
  return (
    <div className='bg-green-200'>
      <HeadingH2 title='WORKS' subTitle='プロジェクト履歴' />
      <p>テスト</p>
      <p>テスト</p>
      <p>カルーセルはまた別途対応</p>
    </div>
  )
}

export default Project
