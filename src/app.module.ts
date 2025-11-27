import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from 'product/product.module';
import { NewsModule } from 'news/news.module';
import { SeriesModule } from 'series/series.module';
import { MainPageModule } from 'mainPage/mainPage.module';

@Module({
  imports: [ProductModule, NewsModule, SeriesModule, MainPageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
