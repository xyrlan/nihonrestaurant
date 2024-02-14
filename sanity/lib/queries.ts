import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export const fotoVideoPostQuery = groq`
*[
  _type in ["fotoPost", "videoPost"]
]`
export const videoPostQuery = groq`
*[_type == "videoPost"]`

export async function getFotosVideos(client: SanityClient): Promise<FotoVideoPost[]> {
  return await client.fetch(fotoVideoPostQuery)
}



export interface FotoVideoPost {
  foto?: any
  legenda?: string
  date?: string
  video?: any
  _type?: string
}
