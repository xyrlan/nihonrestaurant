'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

const ParceirosSection = () => {

  return (
    <section id='Nossos Parceiros' className='w-full bg-[#292824] py-20 '>
      <div className='container px-8'>
        <h2 className='text-[#b93531] font-semibold text-3xl mb-8'>Nossos Parceiros</h2>
        <div className='flex items-center justify-center gap-10'>
          <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} >
            <Link href={'https://www.instagram.com/finos_paladares_restaurante/'} target='_blank' className=' text-white gap-4 flex sm:gap-20 items-center justify-center space-y-20'>
              <Image src={'/finospaladares.png'} width={160} height={160} alt='fotopratonihon' className='w-24 md:w-40 h-auto object-contain hover:scale-95 duration-200' />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} >
            <Link href={'https://www.instagram.com/aquidaclass_marketing/'} target='_blank' className=' text-white gap-4 flex sm:gap-20 items-center justify-center space-y-20'>
              <Image src={'/finospaladares.png'} width={160} height={160} alt='fotopratonihon' className='w-24 md:w-40 h-auto object-contain hover:scale-95 duration-200' />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ParceirosSection