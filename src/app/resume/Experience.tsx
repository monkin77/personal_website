import React from 'react'
import ResumeSectionWrapper from './ResumeSectionWrapper'
import { FaBriefcase } from 'react-icons/fa'
import ExperienceCards from './ExperienceCards'

const Experience = () => {
  return (
    <ResumeSectionWrapper title="Work Experience" icon={<FaBriefcase className='w-full h-full' />} id="experience">
        <div className=''>
            <ExperienceCards />
        </div>
    </ResumeSectionWrapper>
  )
}

export default Experience