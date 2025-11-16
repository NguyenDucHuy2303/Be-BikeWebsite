// prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // nếu muốn dùng PrismaService ở mọi module mà không cần import
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
