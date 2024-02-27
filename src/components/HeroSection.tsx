'use client'
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

const HeroSection = () => {
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} id='inicio' className="relative flex min-h-screen items-center justify-center sm:p-24 ">
      <Image src={'/nihonfachada.jpeg'} fill alt='fundo' className='w-full h-full absolute object-cover object-top'/>
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className='border-4 border-white bg-black bg-opacity-50 p-10 max-w-lg z-20'>
        <h2 className='text-3xl md:text-5xl text-white font-bold mb-4 tracking-tighter '>AQUI COMEÇAM TRADIÇÕES.</h2>
        <p className='text-white text-base sm:text-lg'>Há 12 anos em Aquidauana, temos orgulhos de fazer parte da vida
          de tantas familias e suas tradições. Nós buscamos a
          qualidade e excelência em nossos pratos e produtos, com
          atendimento diferenciado que fez de nós, o segundo lar de muitas pessoas</p>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection