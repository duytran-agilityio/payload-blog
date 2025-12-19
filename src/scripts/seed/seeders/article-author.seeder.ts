import { Payload } from 'payload';
import { faker } from '@faker-js/faker';
import { ARTICALE_AUTHORS_ROLE_OPTIONS } from '@/collections/ArticaleAuthors/constants';
import { createMediaFromImageUrl } from '../lib/create-media-from-image-url';

export async function articleAuthorSeeder(payload: Payload) {
  try {
    const imageUrl = faker.image.personPortrait({ size: 256 });
    const media = await createMediaFromImageUrl(payload, imageUrl);
    if (!media) {
      console.warn(
        'Stop seeding article authors because failed to create media from image URL',
      );
      return;
    }
    await payload.create({
      collection: 'articale-authors',
      data: {
        name: faker.person.fullName(),
        role: ARTICALE_AUTHORS_ROLE_OPTIONS.STAFF_WRITER,
        avatar: media,
      },
    });
    console.log('Article author created successfully');
  } catch (error) {
    console.error('Error creating article author', error);
  }
}
