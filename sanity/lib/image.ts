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


export const urlForVideo = (source: { asset?: { _ref?: string } }): string | null => {
  // Verificar se a origem do vídeo está definida e tem a propriedade necessária
  if (!source?.asset?._ref) {
    console.error("Video source is not correctly defined.");
    return null;
  }

  // Try to extract the video ID from the _ref
  const refParts = source.asset._ref.split('-');
  if (refParts.length < 3 || refParts[0] !== 'file') {
    console.error("Unexpected _ref format:", source.asset._ref);
    return null;
  }

  const videoId = refParts[1];

  // Construir e retornar a URL do vídeo com base no ID
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${videoId}.mp4`;
};