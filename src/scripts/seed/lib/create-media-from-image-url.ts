import { Payload } from 'payload';
import { faker } from '@faker-js/faker';

export async function createMediaFromImageUrl(
  payload: Payload,
  imageUrl: string,
) {
  try {
    const res = await fetch(imageUrl);
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const mimetype = res.headers.get('content-type') || 'image/jpeg';
    const fileSize = buffer.length;
    const filename = res.url.split('/').pop()?.split('?')[0];

    if (!filename) {
      throw new Error('Failed to get filename from image URL');
    }

    const media = await payload.create({
      collection: 'media',
      draft: true,
      data: {
        alt: faker.lorem.word(3),
      },
      file: {
        data: buffer,
        name: filename,
        mimetype,
        size: fileSize,
      },
    });
    return media;
  } catch (error) {
    console.error('Error creating media from image URL', error);
    return null;
  }
}
