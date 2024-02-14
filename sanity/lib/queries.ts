import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export const fotoPostQuery = groq`
*[_type == "fotoPost"]`


export async function getFotos(client: SanityClient): Promise<FotoPost[]> {
  return await client.fetch(fotoPostQuery)
}

export interface FotoPost {
  foto?: any
  legenda?: string
  date?: string
}
