import groq from 'groq'

export const fotoPostQuery = groq`
*[_type == "fotoPost"] | order(_createdAt desc)
`

export const videoPostQuery = groq`
*[_type == "videoPost"] | order(_createdAt desc)
`

export interface FotoPost {
  foto?: any
  legenda?: string
  date?: string
}

export interface VideoPost {
  video?: any
  legenda?: string
  date?: string
}


export interface FotoVideoPost {
  foto?: any
  video?: any
  legenda?: string
  date?: string
  _type?: string

}