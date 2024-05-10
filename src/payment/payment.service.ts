import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentEntity } from './entity/payment.entity';
//import { BusinessLogicException, BusinessError } from '../shared/errors/businessLogic-errors';


@Injectable()
export class BusinessService{
    // Constructor
    constructor(
        @InjectRepository(PaymentEntity)
        private readonly paymentRepository: Repository<PaymentEntity>
    ){}

    // Functions

    // Create
    async createBusiness(business: PaymentEntity): Promise<PaymentEntity>{
        return await this.paymentRepository.save(business)
    }

    // Get all
    async findAll(): Promise<PaymentEntity[]>{
        return await this.paymentRepository.find();
    }

    // Get by id
    async findOne(id: string): Promise<PaymentEntity>{
        const payment: PaymentEntity = await this.paymentRepository.findOne({where:{id}});
        // Manage error with class 
        //if(!business)
        //    throw new BusinessLogicException("The business with the given id was not found", BusinessError.NOT_FOUND);
        return payment
    }

    // Update
    async update(id: string, payment: PaymentEntity): Promise<PaymentEntity> {
        const persistedBusiness: PaymentEntity = await this.paymentRepository.findOne({where:{id}});
        // Manage error with class 
        //if (!persistedBusiness)
        //  throw new BusinessLogicException("The business with the given id was not found", BusinessError.NOT_FOUND);
        payment.id = id; 
        return await this.paymentRepository.save(payment);
    }
    
    // Delete 
    async delete(id: string) {
        const payment: PaymentEntity = await this.paymentRepository.findOne({where:{id}});
        // Manage error with class 
        //if (!business)
        //  throw new BusinessLogicException("The business with the given id was not found", BusinessError.NOT_FOUND);
        await this.paymentRepository.remove(payment);
    }
}
