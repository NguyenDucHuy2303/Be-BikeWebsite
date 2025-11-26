import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    dto: any,
    galleryImages: any,
    techImage: any,
    sectionsImages: any,
  ) {
    if (!dto?.seriesId) throw new Error('seriesId is required');

    const features = JSON.parse(dto.features);
    const sections = JSON.parse(dto.sections);
    const createData: any = {
      name: dto.name,
      shortDesc: dto.shortDesc,
      description: dto.description,
      isActive: dto.isActive === 'true' || dto.isActive === true,
      features,
      sections,
      techImage: techImage ? techImage.buffer.toString('base64') : null,
      galleryImages:
        galleryImages?.map((f) => f.buffer.toString('base64')) || [],
      specifications: {}, // parse nếu cần
    };

    // Nếu FE gửi seriesId mới, connect
    if (dto.seriesId) {
      createData.series = { connect: { id: dto.seriesId } };
    }

    // return this.prisma.product.update({
    //   where: { id },
    //   data: updateData,
    // });
    return this.prisma.product.create({
      data: createData,
    });
  }

  async findAll() {
    return this.prisma.product.findMany({
      include: { series: true }, // include series relation
    });
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { series: true },
    });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async update(
    id: string,
    dto: any,
    galleryImages: any,
    techImage: any,
    sectionsImages: any,
  ) {
    const data = await this.findOne(id); // ensure exists
    if (!data) return null;

    const features = JSON.parse(dto.features);
    const sections = JSON.parse(dto.sections);

    // Lấy tất cả file trừ file cuối làm gallery
    // const galleryFiles = files.slice(0, -1);
    // const techImage = files[files.length - 1]?.buffer;

    const updateData: any = {
      name: dto.name,
      shortDesc: dto.shortDesc,
      description: dto.description,
      isActive: dto.isActive === 'true' || dto.isActive === true,
      features,
      sections,
      techImage: techImage ? techImage.buffer.toString('base64') : null,
      galleryImages:
        galleryImages?.map((f) => f.buffer.toString('base64')) || [],
      specifications: {}, // parse nếu cần
    };

    // Nếu FE gửi seriesId mới, connect
    if (dto.seriesId) {
      updateData.series = { connect: { id: dto.seriesId } };
    }

    return this.prisma.product.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // ensure exists
    return this.prisma.product.delete({ where: { id } });
  }
}
