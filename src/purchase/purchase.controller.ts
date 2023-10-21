import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { createPurchaseDto } from './dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { PurchaseEntity } from './entities/purchase.entity';

@Controller('purchase')
@ApiTags('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  @ApiCreatedResponse({ type: PurchaseEntity })
  @ApiOperation({ summary: 'Create a new purchase' })
  @ApiNotFoundResponse({ description: 'Plant not found' })
  @ApiBadRequestResponse({ description: 'Not enough plants in stock' })
  create(@Body() createPurchaseDto: createPurchaseDto) {
    return this.purchaseService.createPurchase(createPurchaseDto);
  }

  @Get(':id')
  @ApiOkResponse({ type: PurchaseEntity })
  @ApiOperation({ summary: 'Find a purchase by its order number' })
  @ApiNotFoundResponse({ description: 'Purchase not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.purchaseService.findPurchase(id);
  }
}
