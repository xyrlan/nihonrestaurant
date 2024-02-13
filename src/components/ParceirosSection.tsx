import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ParceirosSection = () => {
  return (
    <section className='w-full bg-[#292824] py-20 '>
      <div className='container px-8'>
        <h2 className='text-[#b93531] font-semibold text-3xl mb-8'>Nossos Parceiros</h2>
        <Link href={'https://www.instagram.com/finos_paladares_restaurante/'} target='_blank' className=' text-white gap-4 flex sm:gap-20 items-center justify-center space-y-20'>
          <Image src={'/finospaladares.png'} width={700} height={700} alt='fotopratonihon' className='w-24 md:w-40 h-auto object-contain' />
        </Link>
      </div>
    </section>
  )
}

export default ParceirosSection