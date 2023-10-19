import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class createPlantDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  scientificName: string;

  @IsInt()
  @Min(0)
  @IsNotEmpty()
  @ApiProperty({
    minimum: 0,
  })
  quantity: number;

  @IsNumber()
  @Min(0.01)
  @IsNotEmpty()
  @ApiProperty({
    minimum: 0.01,
  })
  price: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  funFact: string;
}
