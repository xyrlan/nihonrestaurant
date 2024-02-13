'use client'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"


const CursoSection = () => {
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} id='CURSOS' className="flex min-h-screen items-center justify-center p-12 px-6 sm:p-24 max-sm:bg-center bg-cover bg-[url('/nihoncursos.jpg')]">
      <div className="mx-auto max-w-screen-xl px-8 py-16 sm:px-8 lg:px-12 bg-[#292824] text-gray-100 w-full">
        <h2 className='text-[#b93531] font-semibold text-3xl mb-8'>Conheça nossos cursos e consultorias</h2>
        <div className='space-y-20'>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className='flex gap-10 lg:gap-20 items-center max-md:flex-col justify-center'>
            <p
              className='sm:text-lg tracking-wide first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left text-pretty first-letter:text-[#b93531]'>
              Nosso Chef Thiago Arakaki Sato fornece curso para você se tornar um profissional Sushiman. Se você quer se tornar um Sushiman profissional e aprender de forma segura e muito eficiente todos os detalhes para exercer bem esta profissão, nossos cursos são ideais para você. Sob a orientação experiente do Chef Thiago Arakaki Sato, você terá a oportunidade de dominar as técnicas essenciais da culinária japonesa, desde o preparo do arroz até a arte de cortar o peixe de forma precisa e elegante.
            </p>
            <Image src={'/thiagonihon2.jpg'} width={200} height={355} alt='cursonihon' className='max-md:hidden' />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className='flex max-md:flex-col h-full w-full items-center justify-center gap-10 lg:gap-20'>
            <Image src={'/thiagonihon.jpg'} width={200} height={355} alt='cursonihon' />
            <p className='sm:text-lg tracking-wide first-letter:text-5xl first-letter:font-bold first-letter:text-[#b93531] first-letter:mr-3 first-letter:float-left text-pretty'>O segredo de um excelente sushi e pratos orientais está nos detalhes, no modo de fazer. Nosso Chef Thiago Arakaki Sato somam imbatíveis 10 anos de experiência no Japão, adquiridos no próprio país e também Know How de mais 10 na profissão de Chef de Gastronomia no Nihon Restaurante, técnica e arte. Com eles, você vai dominar, em casa, todos os segredos e técnica de um excelente Sushichef Profissional.</p>
          </motion.div>
        </div>
        <div className='w-full flex justify-end'>
          <button
            className="flex items-center gap-2 group w-full mt-10 rounded duration-200 text-center bg-gray-100 px-5 py-3 font-medium text-[#b93531] hover:bg-gray-400 sm:w-auto"
          >
            Quero saber mais
            <ArrowRight className='transition-all group-hover:translate-x-2' />
          </button>
        </div>
      </div>
    </motion.section>
  )
}

export default CursoSection