import { FontAwesomeIcon } from '　'
import React, { VFC } from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

type Props = {
  language: string
  icon: IconDefinition
  children: string
  width: string
}

const SkillDetail: VFC<Props> = ({ language, icon, children, width }) => {
  const texts = children.split(/(\n)/).map((item, index) => {
    return <React.Fragment key={index}>{item.match(/\n/) ? <br /> : item}</React.Fragment>
  })

  return (
    <div className={`mx-4 sm:ml-8 lg:mx-[4%] mt-8 sm:mt-16 mb-8 sm:mb-16 ${width}`}>
      <div className='relative mb-4'>
        <FontAwesomeIcon
          icon={icon}
          className='text-8xl text-[#D3DFC2] block mx-auto'
        ></FontAwesomeIcon>
        <h3 className='font-bold tracking-widest absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          {language}
        </h3>
      </div>
      <p className='text-xs sm:text-base lg:text-lg leading-relaxed sm:leading-7'>{texts}</p>
    </div>
  )
}

export default SkillDetail
