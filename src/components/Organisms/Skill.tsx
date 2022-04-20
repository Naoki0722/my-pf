import { NextPage } from 'next'
import HeadingH2 from '../Atoms/HeadingH2'
import SkillList from '../Molecules/SkillList'
import SkillList2 from '../Molecules/SkillList2'
import SkillList3 from '../Molecules/SkillList3'

const Skill: NextPage = () => {
  return (
    <div id='skill' className='skill-area px-5 sm:px-24'>
      <HeadingH2 title='SKILLS' subTitle='できること' />
      <SkillList />
      <SkillList2 />
      <SkillList3 />
      <div className='flex justify-center pb-24'>
        <p className='text-center text-xl py-3 px-1 leading-relaxed border-dotted  border-y-4 border-green-600'>
          今後はプログラミングのメンター業務が決まっており、
          <br />
          教える立場としての経験も積んでいく予定です。
        </p>
      </div>
    </div>
  )
}

export default Skill
