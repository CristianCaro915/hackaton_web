import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverEntity } from './entity/driver.entity';
//import { BusinessLogicException, BusinessError } from '../shared/errors/businessLogic-errors';


@Injectable()
export class BusinessService{
    // Constructor
    constructor(
        @InjectRepository(DriverEntity)
        private readonly driverRepository: Repository<DriverEntity>
    ){}

    // Functions

    // Create
    async createBusiness(business: DriverEntity): Promise<DriverEntity>{
        return await this.driverRepository.save(business)
    }

    // Get all
    async findAll(): Promise<DriverEntity[]>{
        return await this.driverRepository.find();
    }

    // Get by id
    async findOne(id: string): Promise<DriverEntity>{
        const driver: DriverEntity = await this.driverRepository.findOne({where:{id}});
        // Manage error with class 
        //if(!business)
        //    throw new BusinessLogicException("The business with the given id was not found", BusinessError.NOT_FOUND);
        return driver
    }

    // Update
    async update(id: string, driver: DriverEntity): Promise<DriverEntity> {
        const persistedBusiness: DriverEntity = await this.driverRepository.findOne({where:{id}});
        // Manage error with class 
        //if (!persistedBusiness)
        //  throw new BusinessLogicException("The business with the given id was not found", BusinessError.NOT_FOUND);
        driver.id = id; 
        return await this.driverRepository.save(driver);
    }
    
    // Delete 
    async delete(id: string) {
        const driver: DriverEntity = await this.driverRepository.findOne({where:{id}});
        // Manage error with class 
        //if (!business)
        //  throw new BusinessLogicException("The business with the given id was not found", BusinessError.NOT_FOUND);
        await this.driverRepository.remove(driver);
    }
}
