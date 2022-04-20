import { NextPage } from 'next'
import Category from '../Atoms/Category'
import SkillDetail from './SkillDetail'
import { faLaravel } from '@fortawesome/free-brands-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faSymfony } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faR } from '@fortawesome/free-solid-svg-icons'

const SkillList: NextPage = () => {
  return (
    <div className='relative mb-24'>
      <Category category='Languages' />
      <div className='flex flex-wrap justify-between bg-white rounded-[4.5rem] sm:rounded-2xl sm:w-11/12 sm:mx-auto'>
        <SkillDetail language='Laravel' icon={faLaravel} width='w-2/5 sm:w-1/5'>
          {`経験年数 2年\n本業、副業含め常に扱っています。0→1からのサービス開発を担当。`}
        </SkillDetail>
        <SkillDetail language='Nuxt.js' icon={faVuejs} width='w-2/5 sm:w-1/5'>
          {`経験年数 Vue.js1年 Nuxt.js0.5年\nプログラミングスクールで利用する顧客管理システム(CRM)のNuxt.js+LaravelのAPI通信構成で開発。当時のチーム:フロントエンド側を2名で、日程管理や技術的質問の対応等フロントエンドリーダーを担当。`}
        </SkillDetail>
        <SkillDetail language='Symfony' icon={faSymfony} width='w-2/5 sm:w-1/5'>
          {`経験年数 0.5年\nSymfonyを導入しているEC-CUBEを利用した通販サイトのリニューアル業務を担当。`}
        </SkillDetail>
        <SkillDetail language='Ruby on Rails' icon={faR} width='w-2/5 sm:w-1/5'>
          {`経験年数 0.5年\nSymfonyを導入しているEC-CUBEを利用した通販サイトのリニューアル業務を担当。`}
        </SkillDetail>
        <SkillDetail language='Python' icon={faPython} width='w-2/5 sm:w-1/5'>
          {`経験年数 0.5年\nフレームワークを利用しないツール開発の経験あり。フロントとはGraphQLを利用して疎通する仕組みをとりました。`}
        </SkillDetail>
      </div>
    </div>
  )
}

export default SkillList
