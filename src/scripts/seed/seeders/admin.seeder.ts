import { Payload } from 'payload';
import { isDuplicateError } from '../lib/is-duplicate-error';
import { env } from '@/lib/env';

export async function adminSeeder(payload: Payload) {
  try {
    await payload.create({
      collection: 'users',
      data: {
        email: env.CMS_SEED_ADMIN_EMAIL,
        password: env.CMS_SEED_ADMIN_PASSWORD,
      },
    });
  } catch (error) {
    if (isDuplicateError(error, 'email')) {
      console.error('Admin user already exists');
    } else {
      console.error('Error creating admin user', error);
    }
  }
}
