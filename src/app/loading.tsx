import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='h-screen w-full  flex items-center justify-center bg-[#292824]'>
      <Image src={'/nihonspan.png'} width={400} height={400} alt='logonihon' className='h-12 md:h-20 w-auto duration-300 motion-safe:animate-pulse' />
    </div>
  )
}

export default loading