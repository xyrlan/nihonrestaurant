import { ArrowRight } from 'lucide-react'
import React from 'react'

const MyButton = ({title}: any) => {
  return (
    <button
      className='flex items-center gap-2 group w-full mt-5 rounded-md duration-200 text-center bg-gray-100 font-medium text-[#b93531] sm:w-auto'
    >
      <div className=" group-hover:text-gray-100 relative px-5 py-3 w-full flex justify-center items-center">
        <div className='z-20 relative flex'>{title}<ArrowRight className='ml-2 group-hover:text-slate-100 group-hover:translate-x-2 transition-all' /> </div>
        <div className='group-hover:bg-[#1d1d19] rounded absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-300 z-0' />
      </div>
    </button>
  )
}

export default MyButton