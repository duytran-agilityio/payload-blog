import { CollectionConfig } from 'payload';

export const ArticaleAuthors: CollectionConfig = {
  slug: 'articale-authors',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      options: ['Staff Writer', 'Guest Writer', 'Contributer'],
      required: true,
      defaultValue: 'Staff Writer',
    },
  ],
};
