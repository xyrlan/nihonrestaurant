'use client'
import React from 'react'
import { urlForImage } from '../../sanity/lib/image'
import { FotoPost } from '../../sanity/lib/queries'
import Image from 'next/image'
import { motion } from "framer-motion"
import { Calendar } from 'lucide-react'
import { formatDate } from '@/lib/utils'



const MasonryGrid = ({ fotos }: any) => {

  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} id='cursos' className="flex min-h-screen justify-center p-12 py-32 sm:py-44 px-6 sm:p-24 bg-[#292824]">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8 sm:mb-12">
          Feed de fotos
        </h2>

        <div className="mt-8 [column-fill:_balance] sm:columns-2 spacce-y sm:gap-6 lg:columns-3 lg:gap-8">
          {fotos.map((foto: FotoPost, index: number) => (
            <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 , delay: index/10 }} key={index} className='relative rounded-lg shadow transition hover:shadow-lg group sm:break-inside-avoid mb-8'>
              <Image
                className="h-auto max-w-full rounded opacity-75 transition-opacity group-hover:opacity-50"
                src={urlForImage(foto.foto)} // Substitua 'url' pelo caminho real da imagem
                alt={`Foto ${foto.legenda}`}
                width={400}
                height={500}
              />
              <div className="absolute bottom-0 h-full p-4 sm:p-6 lg:p-8 flex items-end">
                <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-sm text-white">
                    {foto.legenda}
                  </p>
                  <div className="w-full text-xs flex items-center gap-2 my-2 text-white"><Calendar className='h-4 w-4' /> {formatDate(foto.date!)}</div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default MasonryGrid

