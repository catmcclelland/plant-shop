import { Controller, Get } from '@nestjs/common';
import { PlantService } from './plant.service';

@Controller('plants')
export class PlantController {
  constructor(private readonly plantService: PlantService) {}

  @Get()
  findAll() {
    return this.plantService.findAllPlants();
  }
}
