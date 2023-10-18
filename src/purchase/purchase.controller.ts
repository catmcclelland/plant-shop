import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { createPurchaseDto } from './dto';  

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  create(@Body() createPurchaseDto: createPurchaseDto) {
    return this.purchaseService.createPurchase(createPurchaseDto);
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseService.findPurchase(+id);
  }

  }

