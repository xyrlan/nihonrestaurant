'use client'
import React from 'react'
import MyButton from './MyButton'
import { motion } from "framer-motion"


const NossaHistoriaHeroSection = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
      className="relative bg-[url('/nihon-herocompressed.webp')] bg-cover bg-center bg-no-repeat p-12 py-20 sm:py-44 px-6 sm:p-24 text-white"
    >
      <div
        className="absolute inset-0 bg-black/35 sm:bg-transparent sm:from-black/95 sm:to-black/25 sm:bg-gradient-to-r bg-gradient-to-l"
      ></div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Nihon
            <strong className="block font-extrabold text-[#b93531]"> Sua segunda casa. </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Conheça mais detalhadamente a historia do restaurante Nihon e do nosso Chef!
          </p>

          <div onClick={() => {
            const element = document.getElementById('nossa-historia');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }} className="mt-8 flex flex-wrap gap-4 text-center">
            <MyButton title={'Quero Conhecer!'} />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default NossaHistoriaHeroSection