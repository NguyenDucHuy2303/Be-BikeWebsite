// prisma.config.ts
import { defineConfig } from 'prisma/config';
import * as dotenv from 'dotenv';

// Load .env explicit (Windows đôi khi không tự nhận)
dotenv.config({ path: './.env' });

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  engine: 'classic',
  datasource: {
    url: process.env.DATABASE_URL || '', // dùng process.env trực tiếp
  },
});
