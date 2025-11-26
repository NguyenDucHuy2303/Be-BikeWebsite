import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';

@Injectable()
export class SeriesService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateSeriesDto) {
    return this.prisma.series.create({ data });
  }

  findAll() {
    return this.prisma.series.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: string) {
    return this.prisma.series.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateSeriesDto) {
    return this.prisma.series.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.series.delete({
      where: { id },
    });
  }
}
