import { Plant, Purchase } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class PurchaseEntity implements Purchase {
  @ApiProperty()
  orderNumber: number;

  @ApiProperty()
  purchaserName: string;

  @ApiProperty()
  shippingAddress: string;

  @ApiProperty()
  plantId: number;

  @ApiProperty()
  plantName: string;

  @ApiProperty()
  purchaseQuantity: number;

  @ApiProperty()
  totalPrice: number;

  @ApiProperty()
  plant: Plant;
}
