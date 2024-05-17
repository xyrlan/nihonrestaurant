'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import MyButton from './MyButton'
import Link from 'next/link'


const CursoSection = () => {
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} id='cursos' className="flex min-h-screen items-center justify-center p-12 sm:py-20 px-6 sm:p-24 bg-[#292824]">
      <div className="mx-auto max-w-screen-xl px-8 sm:px-8 lg:px-12 text-gray-100 w-full">
        <h2 className='text-[#b93531] font-semibold text-3xl sm:text-5xl mb-8 max-sm:text-center'>Conheça nossos cursos e consultorias</h2>
        <div className='space-y-20 max-sm:text-center'>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className='flex gap-10 lg:gap-20 items-center max-md:flex-col justify-center'>
            <p
              className='sm:text-lg tracking-wide'>
              Nosso Chef Thiago Arakaki Sato fornece curso para você se tornar um profissional Sushiman. Se você quer se tornar um Sushiman profissional e aprender de forma segura e muito eficiente todos os detalhes para exercer bem esta profissão, nossos cursos são ideais para você. Sob a orientação experiente do Chef Thiago Arakaki Sato, você terá a oportunidade de dominar as técnicas essenciais da culinária japonesa, desde o preparo do arroz até a arte de cortar o peixe de forma precisa e elegante.
            </p>
            <Image src={'/thiagonihon2.jpg'} width={200} height={355} alt='cursonihon' className='max-md:hidden' />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className='flex max-md:flex-col h-full w-full items-center justify-center gap-10 lg:gap-20'>
            <Image src={'/thiagonihon.jpg'} width={200} height={355} alt='cursonihon' />
            <p className='sm:text-lg tracking-wide '>O segredo de um excelente sushi e pratos orientais está nos detalhes, no modo de fazer. Nosso Chef Thiago Arakaki Sato somam imbatíveis 10 anos de experiência no Japão, adquiridos no próprio país e também Know How de mais 10 na profissão de Chef de Gastronomia no Nihon Restaurante, técnica e arte. Com eles, você vai dominar, em casa, todos os segredos e técnica de um excelente Sushichef Profissional.</p>
          </motion.div>
        </div>
        <div className='w-full flex justify-end max-sm:justify-center mt-10'>
          <Link target='_blank' href={'https://wa.me/5567993140747/?text=Ol%C3%A1%2C%20quero%20saber%20sobre%20o%20curso%20de%20sushiman'} >
            <MyButton title={'Falar com o chef'} />
          </Link>
        </div>
      </div>
    </motion.section>
  )
}

export default CursoSection