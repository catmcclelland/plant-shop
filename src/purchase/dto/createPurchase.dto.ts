import { IsInt, IsNotEmpty, IsNumber, IsNumberString, IsString, Min, isNumberString } from "class-validator";

export class createPurchaseDto {
    @IsString()
    @IsNotEmpty()
    purchaserName: string;

    @IsString()
    @IsNotEmpty()
    shippingAddress: string;

    @IsInt()
    @IsNotEmpty()
    plantId: number;

    @IsInt()
    @Min(1)
    @IsNotEmpty()
    purchaseQuantity: number;
}