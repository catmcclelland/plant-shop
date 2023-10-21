import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlantService } from './plant.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PlantEntity } from './entities/plant.entity';

@Controller('plants')
@ApiTags('plants')
export class PlantController {
  constructor(private readonly plantService: PlantService) {}

  @Get()
  @ApiOkResponse({ type: [PlantEntity] })
  findAll() {
    return this.plantService.findAllPlants();
  }
}
