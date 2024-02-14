'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import MyButton from './MyButton'
import Link from 'next/link'


const SobreSection = () => {

  return (
    <section id='sobre' className='w-full bg-[#292824] py-20'>
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className='container text-white sm:flex sm:gap-20 space-y-20'>
        <div className='sm:w-1/2 text-pretty max-sm:text-center '>
          <h2 className='mb-12'>
            <span className='text-[#b93531] text-5xl font-bold tracking-tight sm:text-7xl kristi-regular '>
              Mais de uma década em
            </span>
            <br />
            <span className='text-white text-5xl font-bold tracking-tight sm:text-7xl mb-12 '>Aquidauana</span>
          </h2>
          <p className='sm:text-lg tracking-wide mb-4'>Há 12 anos, começamos com um sonho: fornecer comida e atendimento de qualidade em Aquidauana - MS. Hoje, somos referência de sabor e inovação em culinária japonesa na cidade. Com o modelo de pratos a la carte, trabalhamos para trazer um pedacinho do Japão para o Brasil.</p>
          <p className='sm:text-lg tracking-wide mb-4'>Nos orgulhamos de fazer parte da tradição de várias famílias de Aquidauana. São casais que se conheceram em nossas mesas, crianças que aprenderam a apreciar a culinária oriental, e muitos momentos felizes!</p>
          <p className='sm:text-lg tracking-wide mb-4'>É por isso que nosso compromisso se mantém: entregar pratos de qualidade com atendimento excelente. <span className='font-bold text-white'> Esse é o Nihon.</span></p>
          <div className="mt-4 inline-flex">
            <Link href={'/nossahistoria'} >
              <MyButton title={'Conheça mais sobre nossa História'} />
            </Link>
          </div>
        </div>
        <Image src={'/nihonprato.jpg'} width={500} height={333} alt='fotopratonihon' className='sm:w-[40%] h-auto object-contain' />
      </motion.div>

    </section>
  )
}

export default SobreSection