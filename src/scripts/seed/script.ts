import { getPayloadClient } from '@/lib/payload/client';
import { adminSeeder } from './seeders/admin.seeder';
import { articleAuthorSeeder } from './seeders/article-author.seeder';

async function seed() {
  try {
    const payload = await getPayloadClient();
    await adminSeeder(payload);
    await articleAuthorSeeder(payload);
    console.log('Seed completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seed failed', error);
    process.exit(1);
  }
}

seed();
