
import React from 'react'
import { client } from '../../../sanity/lib/client';
import { getFotosVideos } from '../../../sanity/lib/queries';
import MasonryGrid from '@/components/MasonryGrid';



const BlogFotosPage = async () => {
  const fotos = await getFotosVideos(client)

  const reversedFotos = fotos.reverse()
  return (
    <MasonryGrid posts={reversedFotos} />
  )
}

export default BlogFotosPage