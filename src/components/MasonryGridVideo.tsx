'use client'
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Calendar } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { urlForVideo } from '../../sanity/lib/image';
import { FotoVideoPost } from '../../sanity/lib/queries';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from './ui/button';




const MasonryGridVideo = ({ posts }: { posts: FotoVideoPost[] }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 7;

  // Calcula os índices para fatiar o array de posts
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = posts.slice(indexOfFirstVideo, indexOfLastVideo);

  // Função para mudar a página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <motion.section key={currentPage} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} id='cursos' className="flex min-h-screen justify-center p-12 py-32 sm:py-44 px-6 sm:p-24 bg-[#292824]">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8 sm:mb-12">
          Feed de vídeos
        </h2>

        <div className="my-8 [column-fill:_balance] sm:columns-2 spacce-y sm:gap-6 lg:columns-3 lg:gap-8">
          {currentVideos.map((post: FotoVideoPost, index: number) => (
            post.video &&
            <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} key={index} className='relative rounded-lg shadow transition hover:shadow-lg group sm:break-inside-avoid mb-8'>
              <video controls className="h-auto max-w-full rounded w-full">
                <source src={urlForVideo(post.video)!} type="video/mp4" />
                <source src={urlForVideo(post.video)!} type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
              <div className={`h-full p-4 sm:p-6 lg:p-8 flex items-end rounded bg-gray-100 text-black`}>
                <div className={'opacity-100'}>
                  <p className="text-sm ">
                    {post.legenda}
                  </p>
                  <div className="w-full text-xs flex items-center gap-2 my-2 "><Calendar className='h-4 w-4' /> {formatDate(post.date!)}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <Pagination_
          currentPage={currentPage}
          postsPerPage={videosPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </motion.section>
  )
}

export default MasonryGridVideo;



const Pagination_ = ({ currentPage, postsPerPage, totalPosts, paginate }: any) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <PaginationContent className='bg-white rounded'>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href="#" onClick={() => paginate(currentPage - 1)} />
          </PaginationItem>
        )}

        {pageNumbers.map(number => (
          <PaginationItem className='border' key={number}>
            <PaginationLink
              href="#"
              onClick={() => paginate(number)}
              isActive={number === currentPage}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < pageNumbers.length && (
          <PaginationItem>
            <PaginationNext href="#" onClick={() => paginate(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};