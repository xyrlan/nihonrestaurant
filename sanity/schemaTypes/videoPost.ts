import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'videoPost',
  title: 'Vídeos',
  type: 'document',
  fields: [
    defineField({
      name: 'video',
      title: 'Vídeo',
      type: 'file', // Alterado para tipo 'file'
    }),
    defineField({
      name: 'legenda',
      title: 'Legenda',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'date',
      title: 'Data',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'legenda',
      media: 'video',
    },
  },
})
