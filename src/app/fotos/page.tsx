
import React from 'react'
import { client } from '../../../sanity/lib/client';
import { getFotos } from '../../../sanity/lib/queries';
import MasonryGrid from '@/components/MasonryGrid';



const BlogFotosPage = async () => {
  const fotos = await getFotos(client)
  const reversedFotos = fotos.reverse()
  return (
    <MasonryGrid fotos={reversedFotos} />
  )
}

export default BlogFotosPage