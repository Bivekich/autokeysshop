import {defineField, defineType} from 'sanity'

export const otzivType = defineType({
  name: 'otziv',
  title: 'Otziv',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'otziv',
      type: 'string',
    }),
  ],
})
