import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors-no-spec';
//DTO & SERVICE & ENTITY
import { DriverDto } from './dto/driver.dto';
import { DriverEntity } from './entity/driver.entity';
import { DriverService } from './driver.service';

@Controller('drivers')
@UseInterceptors(BusinessErrorsInterceptor)
export class driverController {
    constructor(private readonly driverService: DriverService) {}

  @Get()
  async findAll() {
    return await this.driverService.findAll();
  }

  @Get(':driverId')
  async findOne(@Param('driverId') driverId: string) {
    return await this.driverService.findOne(driverId);
  }

  @Post()
  async create(@Body() driverDto: DriverDto) {
    const driver: DriverEntity = plainToInstance(DriverEntity, driverDto);
    return await this.driverService.create(driver);
  }

  @Put(':driverId')
  async update(@Param('driverId') driverId: string, @Body() driverDto: DriverDto) {
    const driver: DriverEntity = plainToInstance(DriverEntity, driverDto);
    return await this.driverService.update(driverId, driver);
  }

  @Delete(':driverId')
  @HttpCode(204)
  async delete(@Param('driverId') driverId: string) {
    return await this.driverService.delete(driverId);
  }
}