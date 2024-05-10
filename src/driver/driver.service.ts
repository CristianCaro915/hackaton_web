import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverEntity } from './entity/driver.entity';
import { BusinessLogicException, BusinessLogicError} from '../shared/errors/businessLogicError';


@Injectable()
export class DriverService{
    // Constructor
    constructor(
        @InjectRepository(DriverEntity)
        private readonly driverRepository: Repository<DriverEntity>
    ){}

    // Functions

    // Create
    async create(business: DriverEntity): Promise<DriverEntity>{
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
        if(!driver)
            throw new BusinessLogicException("The driver with the given id was not found", BusinessLogicError.NOT_FOUND);
        return driver
    }

    // Update
    async update(id: string, driver: DriverEntity): Promise<DriverEntity> {
        const persisteddriver: DriverEntity = await this.driverRepository.findOne({where:{id}});
        // Manage error with class 
        if (!persisteddriver)
          throw new BusinessLogicException("The driver with the given id was not found", BusinessLogicError.NOT_FOUND);
        driver.id = id; 
        return await this.driverRepository.save(driver);
    }
    
    // Delete 
    async delete(id: string) {
        const driver: DriverEntity = await this.driverRepository.findOne({where:{id}});
        // Manage error with class 
        if (!driver)
          throw new BusinessLogicException("The driver with the given id was not found", BusinessLogicError.NOT_FOUND);
        await this.driverRepository.remove(driver);
    }
}
