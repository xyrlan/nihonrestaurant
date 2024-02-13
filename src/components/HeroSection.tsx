'use client'
import React from 'react'
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section id='INICIO' className="flex min-h-screen items-center justify-center sm:p-24 max-sm:bg-center bg-cover bg-[url('/nihon-hero.jpg')]">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className='border-4 border-white bg-black bg-opacity-50 p-10 max-w-lg'>
        <h2 className='text-3xl md:text-5xl text-white font-bold mb-4 tracking-tighter '>AQUI COMEÇAM TRADIÇÕES.</h2>
        <p className='text-white text-base sm:text-lg'>Há 12 anos em Aquidauana, temos orgulhos de fazer parte da vida
          de tantas familias e suas tradições. Nós buscamos a
          qualidade é excelência em nossos pratos e produtos, com
          atendimento diferenciado que fez de nós, o segundo lar de muitas pessoas</p>
      </motion.div>
    </section>
  )
}

export default HeroSection