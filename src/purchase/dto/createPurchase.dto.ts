import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsNumber, IsNumberString, IsString, Min, isNumberString } from "class-validator";

export class createPurchaseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  purchaserName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  shippingAddress: string;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  @ApiProperty({
    minimum: 1
  })
  plantId: number;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  @ApiProperty({
    minimum: 1
  })
  purchaseQuantity: number;
}