import React from 'react'
import { VideoPost, videoPostQuery } from '../../../sanity/lib/queries'
import { sanityFetch } from '../../../sanity/lib/client'
import MasonryGrid from '@/components/MasonryGrid'
import MasonryGridVideo from '@/components/MasonryGridVideo'

const VideosPage = async () => {

  const videos: VideoPost[] = await sanityFetch({
    query: videoPostQuery,
    tags: ["videoPost"],
  })

  return (
    <MasonryGridVideo posts={videos} />

  )
}

export default VideosPage