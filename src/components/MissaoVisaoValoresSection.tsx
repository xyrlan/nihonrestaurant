'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"



const MissaoVisaoValoresSection = () => {
  return (
    <section id='mvv' className="flex max-lg:flex-col justify-center p-12 px-6 sm:p-24 bg-[#292824]">
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mx-auto max-w-screen-xl flex flex-col items-center px-8 py-16 sm:px-8 lg:px-12 text-gray-100 w-full text-center">
        <h2 className='mb-12'>
          <span className='text-[#b93531] text-5xl font-bold tracking-tight sm:text-7xl kristi-regular '>
            Servir
          </span>
          <br />
          <span className='text-white text-5xl font-bold tracking-tight sm:text-7xl mb-12 '>Nossa Missão</span>
        </h2>
        <p className='sm:text-lg tracking-wide mb-4 max-w-md' >
          Atender com excelência às demandas dos clientes, pelo desenvolvimento e oferta de produtos e serviços que contribuam para a melhoria da qualidade de vida das pessoas, gerando o sonho de possuir novas unidades franqueadoras com diferencial de marca única no mercado, gerando riqueza de forma sustentável.
        </p>

      </motion.div>
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mx-auto max-w-screen-xl flex flex-col items-center px-8 py-16 sm:px-8 lg:px-12 text-gray-100 w-full text-center">
        <h2 className='mb-12'>
          <span className='text-[#b93531] text-5xl font-bold tracking-tight sm:text-7xl kristi-regular '>
            Expandir
          </span>
          <br />
          <span className='text-white text-5xl font-bold tracking-tight sm:text-7xl mb-12 '>Nossa Visão</span>
        </h2>
        <p className='sm:text-lg tracking-wide mb-4 max-w-md' >
          Ser empresa de referência em experiência gastronômica e ambiental, eternizando momentos únicos sendo reconhecida como a melhor opção por clientes, colaboradores, comunidade, fornecedores e investidores, pela qualidade de nossos produtos, serviços e relacionamento, conectando-se a tecnologia, inovação e adaptação ao mercado atual.
        </p>

      </motion.div>
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mx-auto max-w-screen-xl flex flex-col items-center px-8 py-16 sm:px-8 lg:px-12 text-gray-100 w-full text-center">
        <h2 className='mb-12'>
          <span className='text-[#b93531] text-5xl font-bold tracking-tight sm:text-7xl kristi-regular '>
            Disciplina
          </span>
          <br />
          <span className='text-white text-5xl font-bold tracking-tight sm:text-7xl mb-12 '>Nossos Valores</span>
        </h2>
        <ul className='sm:text-lg tracking-wide mb-4 max-w-md'>
          <li>Integridade;</li>
          <li>Comprometimento;</li>
          <li>Valorização humana;</li>
          <li>Superação dos resultados;</li>
          <li>Melhoria contínua;</li>
          <li>Inovação;</li>
          <li>Sustentabilidade.</li>
        </ul>

      </motion.div>
    </section >
  )
}

export default MissaoVisaoValoresSection