import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlantService } from './plant.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PlantEntity } from './entities/plant.entity';
import { createPlantDto } from './dto';
@Controller('plants')
@ApiTags('plants')
export class PlantController {
  constructor(private readonly plantService: PlantService) {}

  @Get()
  @ApiOkResponse({ type: [PlantEntity] })
  findAll() {
    return this.plantService.findAllPlants();
  }

  @Post()
  create(@Body() createPlantDto: createPlantDto) {
    return this.plantService.createPlant(createPlantDto);
  }
}
