import {defineField, defineType} from 'sanity'

export const tovarType = defineType({
  name: 'tovar',
  title: 'Tovar',
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
      name: 'brand',
      type: 'string',
    }),
    defineField({
      name: 'first_description',
      type: 'text',
    }),
    defineField({
      name: 'price_with_work',
      type: 'string',
    }),
    defineField({
      name: 'work_description',
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
