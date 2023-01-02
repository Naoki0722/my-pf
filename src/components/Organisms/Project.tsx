import { NextPage } from 'next'
import Link from 'next/link'
import HeadingH2 from '../Atoms/HeadingH2'

const Project: NextPage = () => {
  return (
    <div id='project' className='bg-green-200'>
      <HeadingH2 title='WORKS' subTitle='プロジェクト履歴' />
      <p>テスト</p>
      <p>テスト</p>
      <p>カルーセルはまた別途対応</p>
      <Link href='/projects'>詳細はこちら</Link>
    </div>
  )
}

export default Project
