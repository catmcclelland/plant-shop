import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlantService } from './plant.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PlantEntity } from './entities/plant.entity';

@Controller('plants')
@ApiTags('plants')
export class PlantController {
  constructor(private readonly plantService: PlantService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve a list of plants in the shop.' })
  @ApiOkResponse({ type: [PlantEntity] })
  findAll() {
    return this.plantService.findAllPlants();
  }
}
