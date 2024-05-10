import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors-no-spec';
//DTO & SERVICE & ENTITY
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entity/user.entity';
import { UserService } from './user.service';

@Controller('users')
@UseInterceptors(BusinessErrorsInterceptor)
export class userController {
    constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':userId')
  async findOne(@Param('userId') userId: string) {
    return await this.userService.findOne(userId);
  }

  @Post()
  async create(@Body() userDto: UserDto) {
    const user: UserEntity = plainToInstance(UserEntity, userDto);
    return await this.userService.create(user);
  }

  @Put(':userId')
  async update(@Param('userId') userId: string, @Body() userDto: UserDto) {
    const user: UserEntity = plainToInstance(UserEntity, userDto);
    return await this.userService.update(userId, user);
  }

  @Delete(':userId')
  @HttpCode(204)
  async delete(@Param('userId') userId: string) {
    return await this.userService.delete(userId);
  }
}