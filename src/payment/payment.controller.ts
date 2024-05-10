import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors-no-spec';
//DTO & SERVICE & ENTITY
import { PaymentEntity } from './entity/payment.entity';
import { PaymentDto } from './dto/payment.dto';
import { PaymentService } from './payment.service';

@Controller('payments')
@UseInterceptors(BusinessErrorsInterceptor)
export class paymentController {
    constructor(private readonly paymentService: PaymentService) {}

  @Get()
  async findAll() {
    return await this.paymentService.findAll();
  }

  @Get(':paymentId')
  async findOne(@Param('paymentId') paymentId: string) {
    return await this.paymentService.findOne(paymentId);
  }

  @Post()
  async create(@Body() paymentDto: PaymentDto) {
    const payment: PaymentEntity = plainToInstance(PaymentEntity, paymentDto);
    return await this.paymentService.create(payment);
  }

  @Put(':paymentId')
  async update(@Param('paymentId') paymentId: string, @Body() paymentDto: PaymentDto) {
    const payment: PaymentEntity = plainToInstance(PaymentEntity, paymentDto);
    return await this.paymentService.update(paymentId, payment);
  }

  @Delete(':paymentId')
  @HttpCode(204)
  async delete(@Param('paymentId') paymentId: string) {
    return await this.paymentService.delete(paymentId);
  }
}