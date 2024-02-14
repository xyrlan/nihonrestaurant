'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import MyButton from './MyButton'


const SobreSection = () => {
  return (
    <section id='Sobre' className='w-full bg-[#292824] py-20'>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className='container text-white sm:flex sm:gap-20 space-y-20'>
        <div className='sm:w-1/2 text-pretty '>
          <h2 className='text-[#b93531] text-4xl font-bold tracking-tight sm:text-5xl mb-8'>
            Mais de uma década em Aquidauana
          </h2>
          <p className='sm:text-lg tracking-wide mb-4'><span className='float-left text-4xl  font-bold mr-3 text-[#b93531]'>Há</span> 12 anos, começamos com um sonho: fornecer comida e atendimento de qualidade em Aquidauana - MS. Hoje, somos referência de sabor e inovação em culinária japonesa na cidade. Com o modelo de pratos a la carte, trabalhamos para trazer um pedacinho do Japão para o Brasil.</p>
          <p className='sm:text-lg tracking-wide mb-4'>Nos orgulhamos de fazer parte da tradição de várias famílias de Aquidauana. São casais que se conheceram em nossas mesas, crianças que aprenderam a apreciar a culinária oriental, e muitos momentos felizes!</p>
          <p className='sm:text-lg tracking-wide mb-4'>É por isso que nosso compromisso se mantém: entregar pratos de qualidade com atendimento excelente. <span className='font-bold text-white'> Esse é o Nihon.</span></p>
          <div className="mt-4 inline-flex">
            <MyButton title={'Conheça nossa Unidade'} />
          </div>
        </div>
        <Image src={'/nihonprato.jpg'} width={500} height={333} alt='fotopratonihon' className='sm:w-[40%] h-auto object-contain' />
      </motion.div>

    </section>
  )
}

export default SobreSection