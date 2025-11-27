import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Injectable()
export class NewsService {
  constructor(private prisma: PrismaService) {}

  create(data: any, coverImageFile: any) {
    const tagsArray: string[] = data.tags
      ? JSON.parse(data.tags as string) // parse từ JSON string
      : [];

    const createData: any = {
      title: data.title,
      slug: data.slug,
      coverImage: coverImageFile
        ? coverImageFile.buffer.toString('base64') // nếu lưu base64
        : data.coverImage || '', // hoặc URL
      content: data.content,
      tags: tagsArray || [], // string[]
      isHidden: data.isHidden === 'true' || data.isHidden === true,
      seoRitle: data.seoRitle || '',
      seoDescription: data.seoDescription || '',
    };
    return this.prisma.news.create({
      data: createData,
    });
  }

  findAll() {
    return this.prisma.news.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: string) {
    return this.prisma.news.findUnique({
      where: { id },
    });
  }

  update(id: string, data: any, coverImageFile: any) {
    const tagsArray: string[] = data.tags
      ? JSON.parse(data.tags as string) // parse từ JSON string
      : [];

    const updateData: any = {
      title: data.title,
      slug: data.slug,
      coverImage: coverImageFile
        ? coverImageFile.buffer.toString('base64') // nếu lưu base64
        : data.coverImage || '', // hoặc URL
      content: data.content,
      tags: tagsArray || [], // string[]
      isHidden: data.isHidden === 'true' || data.isHidden === true,
      seoRitle: data.seoRitle || '',
      seoDescription: data.seoDescription || '',
    };

    return this.prisma.news.update({
      where: { id },
      data: updateData,
    });
  }

  remove(id: string) {
    return this.prisma.news.delete({
      where: { id },
    });
  }
}
