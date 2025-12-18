import { adminSeeder } from './seeders/admin.seeder';

async function seed() {
  try {
    await adminSeeder();
    console.log('Seed completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seed failed', error);
    process.exit(1);
  }
}

seed();
