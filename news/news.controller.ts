import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UploadedFiles,
  UseInterceptors,
  Put,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'coverImage', maxCount: 1 }]))
  create(
    @UploadedFiles()
    files: {
      coverImage?: Express.Multer.File[];
    },
    @Body() dto: any,
  ) {
    const coverImageVa = files.coverImage?.[0];

    return this.newsService.create(dto, coverImageVa);
  }

  @Get()
  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(id);
  }

  @Put(':id')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'coverImage', maxCount: 1 }]))
  update(
    @Param('id') id: string,
    @Body() dto: any,
    @UploadedFiles()
    files: {
      coverImage?: Express.Multer.File[];
    },
  ) {
    const coverImageVa = files.coverImage?.[0];
    return this.newsService.update(id, dto, coverImageVa);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.newsService.remove(id);
  }
}
