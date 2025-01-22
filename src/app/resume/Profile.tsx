import React from 'react'
import ResumeSectionWrapper from './ResumeSectionWrapper'
import { FaUser } from 'react-icons/fa'

const Profile = () => {
  return (
    <ResumeSectionWrapper title="Profile" icon={<FaUser className='w-full h-full' />}>
        <div>

        </div>
    </ResumeSectionWrapper>
  )
}

export default Profile