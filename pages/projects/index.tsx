import React, { useEffect, useState } from 'react'
import Hamburger from '@/components/Molecules/Hamburger'
import ReturnButton from '@/components/Molecules/ReturnButton'
import Header from '@/components/Organisms/Header'
import Image from 'next/image'
import ProjectCard from '@/components/Organisms/ProjectCard'
import { Project } from '@prisma/client'
import Contact from '@/components/Organisms/Contact'
import Footer from '@/components/Organisms/Footer'

export default function Projects() {
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
    <>
      <ReturnButton />
      <Hamburger></Hamburger>
      <div className='z-20 w-full lg:block lg:fixed bg-header'>
        <Header></Header>
      </div>
      <div id='top' className='pt-40 pb-24 tracking-widest text-center'>
        <h2 className='mb-8 text-4xl'>プロジェクト履歴</h2>
        <p className='inline-block py-2 px-4 border'>お問い合わせはこちら</p>
      </div>
      {projects?.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
      <Contact />
      <Footer />
    </>
  )
}
