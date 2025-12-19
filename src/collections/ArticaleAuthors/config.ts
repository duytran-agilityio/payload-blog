import { CollectionConfig } from 'payload';
import { ARTICALE_AUTHORS_ROLE_OPTIONS } from './constants';

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
      options: Object.values(ARTICALE_AUTHORS_ROLE_OPTIONS),
      required: true,
      defaultValue: ARTICALE_AUTHORS_ROLE_OPTIONS.STAFF_WRITER,
    },
  ],
};
