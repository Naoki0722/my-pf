import React, { useEffect } from 'react'
import Hamburger from '../../src/components/Molecules/Hamburger'
import ReturnButton from '../../src/components/Molecules/ReturnButton'
import Header from '../../src/components/Organisms/Header'

export default function Projects() {
  useEffect(() => {
    const projects = async () => {
      const response = await fetch('/api/projects')
      const data = await response.json()
      console.log(data)
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
    </>
  )
}
