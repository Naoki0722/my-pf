import { NextPage } from 'next'
import Category from '../Atoms/Category'
import SkillDetail from './SkillDetail'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const SkillList3: NextPage = () => {
  return (
    <div className='relative mb-24'>
      <Category category='And more' />
      <div className='flex flex-wrap justify-between bg-white rounded-[4.5rem] sm:rounded-2xl sm:w-11/12 sm:mx-auto'>
        <SkillDetail language='Github' icon={faGithub} width='w-2/5 lg:w-1/4'>
          {`経験年数 2.5年\n2016年に勤務した自社開発の会社の時から利用。開発者のリリーサーとしてGithubの管理やデプロイ等の対応経験あり。一部、クラウド環境への自動デプロイや作業効率化としてGithub Actionsの作成も。`}
        </SkillDetail>
        <SkillDetail language='MySQL' icon={faDatabase} width='w-2/5 lg:w-1/4'>
          {`経験年数 各2.5年\n2016年から触れており一時期ブランクがありますが、データ分析のための統合テーブル作成をリレーションで組んだり、スロークエリの確認やIndexを貼ったりしながらテーブル作成の経験あり。 開発環境と本番環境でデータの差異があり、開発環境で十分な確認ができないということから、本番環境(AWS)のデータを一部開発環境に持ってくるDumpの仕組みを作ったりしました。`}
        </SkillDetail>
        <SkillDetail language='React' icon={faReact} width='w-2/5 lg:w-1/4'>
          {`今後業務で使う可能性があり、勉強中。\nモダンなフロント技術に興味関心が高く、日々勉強することは忘れていません。`}
        </SkillDetail>
      </div>
    </div>
  )
}

export default SkillList3
