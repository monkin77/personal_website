import React from 'react'
import ResumeSectionWrapper from './ResumeSectionWrapper'
import { FaBriefcase } from 'react-icons/fa'

const Experience = () => {
  return (
    <ResumeSectionWrapper title="Experience" icon={<FaBriefcase className='w-full h-full' />} id="experience">
        <div className=''>
            <h1>test</h1>
        </div>
    </ResumeSectionWrapper>
  )
}

export default Experience