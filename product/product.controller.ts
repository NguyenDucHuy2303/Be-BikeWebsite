import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';

@Controller('products')
export class ProductController {
  constructor(private service: ProductService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files', 10))
  create(
    @UploadedFiles() files: Express.Multer.File[], // ✅ mảng file
    @Body() dto: CreateProductDto, // ✅ body JSON
  ) {
    return this.service.create(dto, files);
  }

  @Get()
  async findAll() {
    const products = await this.service.findAll();

    return products.map((p) => ({
      ...p,
      techImage: p.techImage
        ? Buffer.from(p.techImage).toString('base64')
        : null,
      galleryImages: Array.isArray(p.galleryImages)
        ? (p.galleryImages as any[])
        : [],
      sections: Array.isArray(p.sections) ? (p.sections as any[]) : [],
      series: p.series ? { id: p.series.id, name: p.series.name } : null,
    }));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const p = await this.service.findOne(id);
    if (!p) return null;

    return {
      ...p,
      techImage: p.techImage
        ? Buffer.from(p.techImage).toString('base64')
        : null,
      galleryImages: Array.isArray(p.galleryImages)
        ? (p.galleryImages as any[])
        : [],
      sections: Array.isArray(p.sections) ? (p.sections as any[]) : [],
      series: p.series ? { id: p.series.id, name: p.series.name } : null,
    };
  }

  @Put(':id')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'galleryImages', maxCount: 10 },
      { name: 'techImage', maxCount: 1 },
    ]),
  )
  update(
    @Param('id') id: string,
    @Body() dto: any,
    @UploadedFiles()
    files: {
      galleryImages?: Express.Multer.File[];
      techImage?: Express.Multer.File[];
    },
  ) {
    const galleryImagesVa = files.galleryImages || [];
    const techImageVa = files.techImage?.[0];
    return this.service.update(id, dto, galleryImagesVa, techImageVa);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
