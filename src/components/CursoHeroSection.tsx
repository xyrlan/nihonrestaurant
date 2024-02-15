'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import MyButton from './MyButton'

const CursoHeroSection = () => {
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="p-12 py-12 sm:py-44 px-6 sm:p-24 text-white relative bg-[#292824]">
      <div
        className="relative mx-auto max-w-screen-xl gap-10 justify-between px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8"
      >
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right flex flex-col items-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl ">
            Você Quer Aprender a Culinária Japonesa de Forma Profissional?
            <strong className="block font-extrabold text-[#b93531] my-4"> aqui você pode aprender com o melhor!</strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Nosso <span className='text-[#b93531]'>Chef Thiago Arakaki Sato</span> fornece curso para você se tornar um profissional Sushiman
          </p>

          <div onClick={() => {
            const element = document.getElementById('cursos');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }} className="mt-8 flex flex-wrap gap-4 text-center">
            <MyButton title={'Saber Mais'} />
          </div>
        </div>
        <Image src={'/sushiman.png'} width={500} height={700} alt='sushimanimage' className='max-sm:mt-10' />
      </div>
    </motion.section>
  )
}

export default CursoHeroSection