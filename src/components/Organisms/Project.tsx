import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import HeadingH2 from '../Atoms/HeadingH2'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Project } from '@prisma/client'
import ProjectSlideCard from './ProjectSlideCard'

const Project: NextPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const [projects, setProjects] = useState<Project[]>()
  useEffect(() => {
    const projects = async () => {
      const response = await fetch('/api/projects')
      const data = await response.json()
      setProjects(data)
    }
    projects()
  }, [])

  return (
    <div id='project' className='bg-[#D3DFC2]'>
      <HeadingH2 title='WORKS' subTitle='プロジェクト履歴' />
      <div className='px-12 mb-20 text-center lg:px-24'>
        <Slider {...settings}>
          {projects?.map((project, index) => (
            <ProjectSlideCard key={index} project={project} />
          ))}
        </Slider>
      </div>
      <div className='pb-14 text-xl text-center lg:text-3xl'>
        <Link href='/projects'>詳細はこちら</Link>
      </div>
    </div>
  )
}

export default Project
