import { ArrowRight } from 'lucide-react'
import React from 'react'

const SecondaryButton = ({title}: any) => {
  return (
    <button
      className='flex items-center gap-2 group w-full mt-5 rounded-md duration-200 text-center bg-[#b93531] font-medium text-gray-100 sm:w-auto'
    >
      <div className=" group-hover:text-[#b93531] relative px-5 py-3 w-full flex justify-center items-center">
        <div className='z-20 relative flex'>{title}<ArrowRight className='ml-2 group-hover:text-[#b93531] group-hover:translate-x-2 transition-all' /> </div>
        <div className='group-hover:bg-gray-100 rounded absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-300 z-0' />
      </div>
    </button>
  )
}

export default SecondaryButton