import {defineField, defineType} from 'sanity'

export const uslugaType = defineType({
  name: 'usluga',
  title: 'Usluga',
  type: 'document',
  fields: [
    defineField({
      name: 'full_title',
      type: 'string',
    }),
    defineField({
      name: 'short_title',
      type: 'string',
    }),
    defineField({
      name: 'question',
      type: 'string',
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
    defineField({
      name: 'paragraph1',
      type: 'text',
    }),
    defineField({
      name: 'paragraph2',
      type: 'text',
    }),
    defineField({
      name: 'paragraph3',
      type: 'text',
    }),
    defineField({
      name: 'image1',
      type: 'image',
    }),
    defineField({
      name: 'image2',
      type: 'image',
    }),
  ],
})
