import {
  Injectable,
  OnModuleInit,
  INestApplication,
  OnApplicationShutdown,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnApplicationShutdown
{
  async onModuleInit() {
    await this.$connect();
  }

  async onApplicationShutdown(signal?: string) {
    await this.$disconnect();
  }

  enableShutdownHooks(app: INestApplication) {
    // Dùng process.on thay cho this.$on
    process.on('beforeExit', async () => {
      await app.close();
    });
  }
}
