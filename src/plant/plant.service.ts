import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createPlantDto } from './dto';

@Injectable()
export class PlantService {
  constructor(private prisma: PrismaService) {}
  findAllPlants() {
    return this.prisma.plant.findMany();
  }

  async findPlant(id: number) {
    const plant = await this.prisma.plant.findUnique({
      where: {
        id: id,
      },
    });

    if (!plant) throw new HttpException('Plant not found', 404);

    return plant;
  }

  updatePlant(id: number, data: any) {
    return this.prisma.plant.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  createPlant(createPlantDto: createPlantDto) {
    return this.prisma.plant.create({
      data: {
        ...createPlantDto,
      },
    });
  }
}
