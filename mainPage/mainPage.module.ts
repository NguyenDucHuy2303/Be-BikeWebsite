import { Module } from '@nestjs/common';
import { MainPageService } from './mainPage.service';
import { PrismaService } from 'prisma/prisma.service';
import { MainPageController } from './mainPage.controller';

@Module({
  controllers: [MainPageController],
  providers: [MainPageService, PrismaService],
})
export class MainPageModule {}
