import { Project } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

export default function ProjectSlideCard({ project }: { project: Project }) {
  return (
    <div className='pb-4 mx-4 bg-white border'>
      <Image
        src={project.image ? '/images/no_image.png' : '/images/no_image.png'}
        alt=''
        width={350}
        height={180}
        objectFit='cover'
      />
      <h3 className='mb-8 text-2xl'>営業支援ツール {project.id}</h3>
    </div>
  )
}
