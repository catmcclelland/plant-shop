import { BadRequestException,Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createPurchaseDto } from './dto';
import { PlantService } from 'src/plant/plant.service';

@Injectable()
//todo: Update once Plant is added to db
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
      throw new BadRequestException('Not enough plants in stock')
    }

    const purchase = await this.prisma.purchase.create({
      data: {
        ...createPurchaseDto,
        totalPrice: totalPrice,
      },
    });
    
    return {...purchase, plant};
  }

  async findPurchase(id: number) {
    const purchase = await this.prisma.purchase.findUnique({
      where: {
        orderNumber: id,
      },
    });

    if (!purchase) throw new NotFoundException('Purchase not found');
    
    const plant = await this.plant.findPlant(purchase.plantId);

    return {...purchase, plant};
  }
}
