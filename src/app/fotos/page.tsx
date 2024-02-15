
import React from 'react'
import { client, sanityFetch } from '../../../sanity/lib/client';
import { FotoPost, fotoPostQuery } from '../../../sanity/lib/queries';
import MasonryGrid from '@/components/MasonryGrid';

const BlogFotosPage = async () => {
  const fotos: FotoPost[] = await sanityFetch({
    query: fotoPostQuery,
    tags: ["fotoPost"],
  })


  return (
    <MasonryGrid posts={fotos} />
  )
}

export default BlogFotosPage