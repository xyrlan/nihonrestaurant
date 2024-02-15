'use client'
import React from 'react'
import { motion } from "framer-motion"
import MyButton from './MyButton'


const NossaHistoriaSection = () => {
  return (
    <section id='nossa-historia' className="flex min-h-screen justify-center p-12 px-6 sm:p-24 bg-[#292824]">
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mx-auto max-w-screen-xl flex flex-col items-center px-8 py-16 sm:px-8 lg:px-12 text-gray-100 w-full text-center">
        <h2 className='mb-12'>
          <span className='text-[#b93531] text-5xl font-bold tracking-tight sm:text-7xl kristi-regular '>
            Paixão por servir bem
          </span>
          <br />
          <span className='text-white text-5xl font-bold tracking-tight sm:text-7xl mb-12 '>Nossa História</span>
        </h2>
        <p className='sm:text-lg tracking-wide mb-4 max-w-md' >
          Com sua história de vida relacionada à comida japonesa, por tradição familiar, Thiago Sato morou no Japão e criou o renomado restaurante Nihon em Agosto de 2015, onde ficou por 3 anos ao lado do chef Diogo Wakugawa que foi sushichef das pioneiras casas de sushi em Campo Grande/MS.
        </p>
        <p className='sm:text-lg tracking-wide mb-4 max-w-md'>
          Natural de Campo Grande, frequentou desde pequeno as primeiras casas de gastronomia oriental da cidade e com 10 anos de vivência no Japão e conhecimento gastronômico familiar de sua mãe, a gastrologa descendente de Okinawa Lídia T. Arakaki Sato trouxe pratos da cultura local como o Soba que é o queridinho da casa e o prato mais pedido pela população Aquidauanense e Anastaciana e também o molho de sashimi pantaneiro receita criada pelo seu pai Carlos Sato, que faz muito sucesso no Tradicional Pesqueiro 110 as margens do Rio Aquidauana.
        </p>
        <p className='sm:text-lg tracking-wide mb-4 max-w-md'>
          Ganhou destaque na cidade com o sabor único de seus pratos, onde possui pratos encontrados somente no Japão e em grandes casas da gastronomia oriental e depois abriu marcas voltadas a gastronomia brasileira e adaptado a cultura local como o Finos Paladares e Via Burguer.
        </p>
        <p className='sm:text-lg tracking-wide mb-4 max-w-md'>
          Apaixonado pela profissão, Thiago está cursando o Nível Superior  de Gastronomia pela Faculdade Anhanguera e marcado pela cozinha fusion japonesa contemporânea.
        </p>
        <p className='sm:text-lg tracking-wide mb-4 max-w-md'>
          Como novo projeto pessoal, o chef está lançando o Via Burguer uma cozinha de memória afetiva, que inclui suas preferências e autenticidade. Baseado na origem da palavra “NIHON”, que traduzido do japonês significa “Japão”, o chef reúne em um único espaço suas paixões gastronômicas que não se limitam somente à comida, mas a bons drinques, ambiente aconchegante e muito mais. Já pelo empreendedorismo que é outra área de formação pelo Empretec-Sebrae/MS e também Bacharel em Administração pela Faculdade Anhanguera e atualmente cursando Faculdade de Marketing Digital, onde possui empresa própria como o Aquidaclass Marketing Digital, tem pretensão de conquistar novos locais na área da Gastronomia como abrir filiais em cidades litorâneas como Caraguatatuba, Pesqueiro 110 e Projeto Lagoa Comprida.
        </p>
      <div onClick={() => {
        const element = document.getElementById('mvv');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }} className="mt-8 flex flex-wrap gap-4 text-center">
        <MyButton title={'Conhecer nossas virtudes'} />
      </div>
      </motion.div>
    </section >
  )
}

export default NossaHistoriaSection