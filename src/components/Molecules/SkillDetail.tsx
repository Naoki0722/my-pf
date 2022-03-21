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
    <div className={`mx-12 mt-16 mb-8 ${width}`}>
      <div className='relative mb-4'>
        <FontAwesomeIcon
          icon={icon}
          className='text-8xl text-green-300 block mx-auto'
        ></FontAwesomeIcon>
        <h3 className='font-bold tracking-widest absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          {language}
        </h3>
      </div>
      <p>{texts}</p>
    </div>
  )
}

export default SkillDetail
