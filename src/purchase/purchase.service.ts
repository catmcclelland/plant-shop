import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createPurchaseDto } from './dto';
import { PlantService } from 'src/plant/plant.service';

@Injectable()
export class PurchaseService {
  constructor(
    private prisma: PrismaService,
    private plant: PlantService,
  ) {}

  async createPurchase(createPurchaseDto: createPurchaseDto) {
    const plantId = createPurchaseDto.plantId;
    const purchaseQuantity = createPurchaseDto.purchaseQuantity;
    const plant = await this.plant.findPlant(plantId);
    const newPlantQuantity = plant!.quantity - purchaseQuantity;
    const totalPrice = plant!.price * purchaseQuantity;

    if (newPlantQuantity >= 0) {
      this.plant.updatePlant(plantId, { quantity: newPlantQuantity });
    } else {
      throw new HttpException('Not enough plants in stock', 400);
    }

    const Purchase = await this.prisma.purchase.create({
      data: {
        ...createPurchaseDto,
        totalPrice: totalPrice,
        plantName: plant!.name,
      },
    });

    return Purchase;
  }

  async findPurchase(id: number) {
    const purchase = await this.prisma.purchase.findUnique({
      where: {
        orderNumber: id,
      },
    });

    if (!purchase) throw new NotFoundException('Purchase not found');

    return purchase;
  }
}
