import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class MainPageService {
  constructor(private prisma: PrismaService) {}

  create(data: any, imageFile?: Express.Multer.File) {
    const createData: any = {
      link: data.link || '',
      phone: data.phone || '',
      fanpageFacebook: data.fanpageFacebook || '',
      address: data.address || '',
      zalo: data.zalo || '',
      image: imageFile
        ? imageFile.buffer.toString('base64') // lưu base64
        : data.image || '', // lưu string sẵn có (URL, base64...)
    };

    return this.prisma.mainPage.create({
      data: createData,
    });
  }

  findAll() {
    return this.prisma.mainPage.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: string) {
    return this.prisma.mainPage.findUnique({
      where: { id },
    });
  }

  update(id: string, data: any, imageFile?: Express.Multer.File) {
    const updateData: any = {
      link: data.link || '',
      phone: data.phone || '',
      fanpageFacebook: data.fanpageFacebook || '',
      address: data.address || '',
      zalo: data.zalo || '',
      image: imageFile ? imageFile.buffer.toString('base64') : data.image || '',
    };

    return this.prisma.mainPage.update({
      where: { id },
      data: updateData,
    });
  }

  remove(id: string) {
    return this.prisma.mainPage.delete({
      where: { id },
    });
  }
}
