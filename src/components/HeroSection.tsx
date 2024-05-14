'use client'
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import MyButton from './MyButton'
import Link from 'next/link'
import SecondaryButton from './SecondaryButton'
import { usePathname, useRouter } from 'next/navigation'

const HeroSection = () => {
  const pathname = usePathname()
  const router = useRouter()
  function handlePath(item: any) {

    if (pathname === '/') {
      const element = document.getElementById(item);
      if (element) {
        element.scrollIntoView({ behavior: 'instant' });
      }
    } else {
      // Se não estamos na mesma rota, redirecionar com o ID da seção
      router.push(`/?section=${item}`);
    }
  }
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} id='inicio' className="relative flex flex-col min-h-screen items-center justify-center sm:p-24 ">
      <Image src={'/nihonfachada.jpeg'} fill alt='fundo' className='w-full h-full absolute object-cover object-center' />
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className='border-4 border-white bg-black bg-opacity-50 p-10 max-w-lg z-20'>
        <h2 className='text-3xl md:text-5xl text-white font-bold mb-4 tracking-tighter '>AQUI COMEÇAM TRADIÇÕES.</h2>
        <p className='text-white text-base sm:text-lg'>
          Há 12 anos em Aquidauana, temos orgulho de fazer parte da vida
          de tantas famílias e suas tradições. Nós buscamos a
          qualidade e excelência em nossos pratos e produtos, com
          atendimento diferenciado que fez de nós, o segundo lar de muitas pessoas</p>
      </motion.div>
      <div className='z-10 flex sm:flex-row flex-col items-center sm:gap-10'>
        <Link target='_blank' href='https://instadelivery.com.br/nihonsushi'>
          <SecondaryButton title='Pedir pelo delivery' />
        </Link>
        <div onClick={() => {
          handlePath('sobre')
        }}>
          <MyButton title='Saber mais' />
        </div>
      </div>
    </motion.section>
  )
}

export default HeroSection