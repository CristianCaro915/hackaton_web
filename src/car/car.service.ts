import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarEntity } from './entity/car.entity';
//import { BusinessLogicException, BusinessError } from '../shared/errors/businessLogic-errors';


@Injectable()
export class BusinessService{
    // Constructor
    constructor(
        @InjectRepository(CarEntity)
        private readonly carRepository: Repository<CarEntity>
    ){}

    // Functions

    // Create
    async createBusiness(business: CarEntity): Promise<CarEntity>{
        return await this.carRepository.save(business)
    }

    // Get all
    async findAll(): Promise<CarEntity[]>{
        return await this.carRepository.find();
    }

    // Get by id
    async findOne(id: string): Promise<CarEntity>{
        const car: CarEntity = await this.carRepository.findOne({where:{id}});
        // Manage error with class 
        //if(!business)
        //    throw new BusinessLogicException("The business with the given id was not found", BusinessError.NOT_FOUND);
        return car
    }

    // Update
    async update(id: string, car: CarEntity): Promise<CarEntity> {
        const persistedBusiness: CarEntity = await this.carRepository.findOne({where:{id}});
        // Manage error with class 
        //if (!persistedBusiness)
        //  throw new BusinessLogicException("The business with the given id was not found", BusinessError.NOT_FOUND);
        car.id = id; 
        return await this.carRepository.save(car);
    }
    
    // Delete 
    async delete(id: string) {
        const car: CarEntity = await this.carRepository.findOne({where:{id}});
        // Manage error with class 
        //if (!business)
        //  throw new BusinessLogicException("The business with the given id was not found", BusinessError.NOT_FOUND);
        await this.carRepository.remove(car);
    }
}

