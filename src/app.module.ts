import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PurchaseModule } from './purchase/purchase.module';
import { PlantModule } from './plant/plant.module';

@Module({
  imports: [PrismaModule, PurchaseModule, PlantModule],
})
export class AppModule {}
