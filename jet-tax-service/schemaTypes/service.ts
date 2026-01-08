import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Service Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Business Services', value: 'Business Services'},
          {title: 'Tax Services', value: 'Tax Services'},
          {title: 'Consultation', value: 'Consultation'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'squareLink',
      title: 'Square Checkout Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this service appears on the pricing page',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      category: 'category',
    },
    prepare(selection) {
      const {title, subtitle, category} = selection
      return {
        title: title,
        subtitle: `${subtitle} - ${category}`,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [{field: 'displayOrder', direction: 'asc'}],
    },
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}],
    },
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [{field: 'category', direction: 'asc'}],
    },
  ],
})
