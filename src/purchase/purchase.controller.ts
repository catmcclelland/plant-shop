import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { createPurchaseDto } from './dto';  
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PurchaseEntity } from './entities/purchase.entity';

@Controller('purchase')
@ApiTags('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  @ApiCreatedResponse({type: PurchaseEntity})
  @ApiNotFoundResponse({description: 'Plant not found'})
  @ApiBadRequestResponse({description: 'Not enough plants in stock'})
  create(@Body() createPurchaseDto: createPurchaseDto) {
    return this.purchaseService.createPurchase(createPurchaseDto);
  }
  
  @Get(':id')
  @ApiOkResponse({type: PurchaseEntity})
  @ApiNotFoundResponse({description: 'Purchase not found'})
  findOne(@Param('id') id: string) {
    return this.purchaseService.findPurchase(+id);
  }

  }

