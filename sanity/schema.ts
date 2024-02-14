import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import post from './schemaTypes/post'
import author from './schemaTypes/author'
import fotoPost from './schemaTypes/fotoPost'
import videoPost from './schemaTypes/videoPost'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [fotoPost, videoPost],
}
