'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Calendar } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { urlForImage } from '../../sanity/lib/image';
import { FotoVideoPost } from '../../sanity/lib/queries';



const MasonryGrid = ({ posts }: { posts: FotoVideoPost[] }) => {

  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} id='cursos' className="flex min-h-screen justify-center p-12 py-32 sm:py-44 px-6 sm:p-24 bg-[#292824]">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8 sm:mb-12">
          Feed de fotos
        </h2>

        <div className="mt-8 [column-fill:_balance] sm:columns-2 spacce-y sm:gap-6 lg:columns-3 lg:gap-8">
          {posts.map((post: FotoVideoPost, index: number) => (
            post.foto &&
            <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} key={index} className='relative rounded-lg shadow transition hover:shadow-lg group sm:break-inside-avoid mb-8'>
              <Image
                className="h-auto max-w-full rounded opacity-75 transition-opacity group-hover:opacity-50"
                src={urlForImage(post.foto)} // Substitua 'url' pelo caminho real da imagem
                alt={`Foto ${post.legenda}`}
                width={400}
                height={500}
              />
              <div className={`h-full p-4 sm:p-6 lg:p-8 flex items-end rounded absolute bottom-0 text-white`}>
                <div
                  className={` opacity-0 translate-y-8 transform  transition-all group-hover:translate-y-0 group-hover:opacity-100`}
                >
                  <p className="text-sm ">
                    {post.legenda}
                  </p>
                  <div className="w-full text-xs flex items-center gap-2 my-2 "><Calendar className='h-4 w-4' /> {formatDate(post.date!)}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default MasonryGrid;