import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'fotoPost',
  title: 'Fotos',
  type: 'document',
  fields: [
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      media: 'foto',
    },
  },
})