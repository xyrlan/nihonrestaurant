import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}


export const urlForVideo = (source: any) => {
  // Verificar se a origem do vídeo está definida
  if (!source || !source.asset || !source.asset._ref) {
    return null;
  }

  // Extrair o ID do vídeo da referência
  const videoId = source.asset._ref.split('-')[1];

  // Construir a URL do vídeo com base no ID
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${videoId}.mp4`;
}