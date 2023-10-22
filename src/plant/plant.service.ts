import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlantService {
  constructor(private prisma: PrismaService) {}
  async findAllPlants() {
    const plants = await this.prisma.plant.findMany();
    return { plants: plants };
  }

  async findPlant(id: number) {
    const plant = await this.prisma.plant.findUnique({
      where: {
        id: id,
      },
    });

    if (!plant) throw new NotFoundException('Plant not found');

    return plant;
  }

  async updatePlant(id: number, data: any) {
    const plant = await this.prisma.plant.update({
      where: {
        id: id,
      },
      data: data,
    });

    return plant;
  }
}
