import React from 'react'
import Divider from '../components/ui/Divider'

const ResumeSectionWrapper = ({children, title, icon}: {children: JSX.Element, title: string, icon: JSX.Element}) => {
  return (
    <div className='max-w-[90vw] min-h-96 flex flex-col items-center mt-10 md:mt-15 px-1 py-5 md:px-5 md:py-10 '> {/* bg-black-100 */}
        <div className='flex flex-row items-center'>
            <div className='w-16 h-16 relative text-teal-500'>
                {icon}
            </div>
            <h1 className='ml-3 md:ml-6 tracking-wide text-2xl md:text-5xl'>{title}</h1>
        </div>

        <Divider className='w-8/12' />
        
        {children}
    </div>
  )
}

export default ResumeSectionWrapper