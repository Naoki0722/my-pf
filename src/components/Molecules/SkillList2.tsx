import { NextPage } from 'next'
import Category from '../Atoms/Category'
import SkillDetail from './SkillDetail'
import { faDocker } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faAws } from '@fortawesome/free-brands-svg-icons'
import { faT } from '@fortawesome/free-solid-svg-icons'

const SkillList2: NextPage = () => {
  return (
    <div className='relative mb-24'>
      <Category category='Infrastructure' />
      <div className='flex flex-wrap justify-between bg-white rounded-[4.5rem] sm:mx-auto sm:w-11/12 sm:rounded-2xl'>
        <SkillDetail language='Docker' icon={faDocker} width='w-2/5 lg:w-1/4'>
          {`経験年数 1.5年\n本業、副業含めサーバーサイド側の言語はDockerで開発。 AWSではECS、GCPではAppEngineやCloudRunを利用し、Dockerに対する知識を日々得ております。`}
        </SkillDetail>
        <SkillDetail language='GCP' icon={faGoogle} width='w-2/5 lg:w-1/4'>
          {`経験年数 1年\nサービスの保守運用。現在も携わっています。`}
        </SkillDetail>
        <SkillDetail language='Terraform' icon={faT} width='w-2/5 lg:w-1/4'>
          {`経験年数 1年\nGCPの環境設定を構築、設定変更も実施。`}
        </SkillDetail>
        <SkillDetail language='AWS' icon={faAws} width='w-2/5 lg:w-1/4'>
          {`経験年数 1年\n0->1のプロジェクト開発で設定等も担当。`}
        </SkillDetail>
      </div>
    </div>
  )
}

export default SkillList2
