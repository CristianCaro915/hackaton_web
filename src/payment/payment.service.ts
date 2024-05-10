import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentEntity } from './entity/payment.entity';
import { BusinessLogicException, BusinessLogicError} from '../shared/errors/businessLogicError';


@Injectable()
export class PaymentService{
    // Constructor
    constructor(
        @InjectRepository(PaymentEntity)
        private readonly paymentRepository: Repository<PaymentEntity>
    ){}

    // Functions

    // Create
    async create(payment: PaymentEntity): Promise<PaymentEntity>{
        return await this.paymentRepository.save(payment)
    }

    // Get all
    async findAll(): Promise<PaymentEntity[]>{
        return await this.paymentRepository.find();
    }

    // Get by id
    async findOne(id: string): Promise<PaymentEntity>{
        const payment: PaymentEntity = await this.paymentRepository.findOne({where:{id}});
        // Manage error with class 
        if(!payment)
            throw new BusinessLogicException("The payment with the given id was not found", BusinessLogicError.NOT_FOUND);
        return payment
    }

    // Update
    async update(id: string, payment: PaymentEntity): Promise<PaymentEntity> {
        const persistedPayment: PaymentEntity = await this.paymentRepository.findOne({where:{id}});
        // Manage error with class 
        if (!persistedPayment)
          throw new BusinessLogicException("The payment with the given id was not found", BusinessLogicError.NOT_FOUND);
        payment.id = id; 
        return await this.paymentRepository.save(payment);
    }
    
    // Delete 
    async delete(id: string) {
        const payment: PaymentEntity = await this.paymentRepository.findOne({where:{id}});
        // Manage error with class 
        if (!payment)
          throw new BusinessLogicException("The payment with the given id was not found", BusinessLogicError.NOT_FOUND);
        await this.paymentRepository.remove(payment);
    }
}
