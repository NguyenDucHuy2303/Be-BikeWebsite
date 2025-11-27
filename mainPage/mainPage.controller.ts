import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UploadedFiles,
  UseInterceptors,
  Put,
} from '@nestjs/common';
import { MainPageService } from './mainPage.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('main-page')
export class MainPageController {
  constructor(private readonly mainPageService: MainPageService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  create(
    @UploadedFiles()
    files: {
      image?: Express.Multer.File[];
    },
    @Body() dto: any,
  ) {
    const imageFile = files.image?.[0];
    return this.mainPageService.create(dto, imageFile);
  }

  @Get()
  findAll() {
    return this.mainPageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mainPageService.findOne(id);
  }

  @Put(':id')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  update(
    @Param('id') id: string,
    @Body() dto: any,
    @UploadedFiles()
    files: {
      image?: Express.Multer.File[];
    },
  ) {
    const imageFile = files.image?.[0];
    return this.mainPageService.update(id, dto, imageFile);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mainPageService.remove(id);
  }
}
