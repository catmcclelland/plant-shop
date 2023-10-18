import { Plant } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class PlantEntity implements Plant {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  scientificName: string;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  funFact: string;
}
