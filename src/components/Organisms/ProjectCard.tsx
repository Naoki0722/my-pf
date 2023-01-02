import { Project } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className='flex justify-center items-start mb-24'>
      <div className='relative w-2/5 h-[400px] text-left'>
        <Image
          src={project.image ? '/images/no_image.png' : '/images/no_image.png'}
          alt=''
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className='w-1/3'>
        <div className='mb-8'>
          <h2 className='text-4xl'>{project.title}</h2>
          <hr />
        </div>
        <h3 className='inline-block px-8 text-lg rounded-xl border border-gray-400'>
          業務内容・期間
        </h3>
        <p className='my-2'>{project.description}</p>
        <h3 className='inline-block px-8 text-lg rounded-xl border border-gray-400'>習得スキル</h3>
        <p className='my-2'>{project.experienceSkill}</p>
      </div>
    </div>
  )
}
