import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors-no-spec';
//DTO & SERVICE & ENTITY
import { CarDto } from './dto/car.dto';
import { CarService } from './car.service';
import { CarEntity } from './entity/car.entity';

@Controller('cars')
@UseInterceptors(BusinessErrorsInterceptor)
export class CarController {
    constructor(private readonly carService: CarService) {}

  @Get()
  async findAll() {
    return await this.carService.findAll();
  }

  @Get(':carId')
  async findOne(@Param('carId') carId: string) {
    return await this.carService.findOne(carId);
  }

  @Post()
  async create(@Body() carDto: CarDto) {
    const car: CarEntity = plainToInstance(CarEntity, carDto);
    return await this.carService.create(car);
  }

  @Put(':carId')
  async update(@Param('carId') carId: string, @Body() carDto: CarDto) {
    const car: CarEntity = plainToInstance(CarEntity, carDto);
    return await this.carService.update(carId, car);
  }

  @Delete(':carId')
  @HttpCode(204)
  async delete(@Param('carId') carId: string) {
    return await this.carService.delete(carId);
  }
}