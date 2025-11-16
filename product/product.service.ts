import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateProductDto) {
    return this.prisma.product.create({
      data: {
        ...dto,
        features: dto.features || [], // String[]
        galleryImages: (dto.galleryImages as any) || [],
        sections: (dto.sections as any) || [],
        specifications: (dto.specifications as any) || [],
      },
    });
  }

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async update(id: number, dto: UpdateProductDto) {
    await this.findOne(id); // ensure exists

    return this.prisma.product.update({
      where: { id },
      data: {
        ...dto,
        features: dto.features || undefined,
        galleryImages: (dto.galleryImages as any) || [],
        sections: (dto.sections as any) || [],
        specifications: (dto.specifications as any) || [],
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id); // ensure exists
    return this.prisma.product.delete({ where: { id } });
  }
}
