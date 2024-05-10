import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RideEntity } from './entity/ride.entity';
//import { BusinessLogicException, BusinessError } from '../shared/errors/businessLogic-errors';


@Injectable()
export class BusinessService{
    // Constructor
    constructor(
        @InjectRepository(RideEntity)
        private readonly rideRepository: Repository<RideEntity>
    ){}

    // Functions

    // Create
    async createBusiness(business: RideEntity): Promise<RideEntity>{
        return await this.rideRepository.save(business)
    }

    // Get all
    async findAll(): Promise<RideEntity[]>{
        return await this.rideRepository.find();
    }

    // Get by id
    async findOne(id: string): Promise<RideEntity>{
        const ride: RideEntity = await this.rideRepository.findOne({where:{id}});
        // Manage error with class 
        //if(!business)
        //    throw new BusinessLogicException("The business with the given id was not found", BusinessError.NOT_FOUND);
        return ride
    }

    // Update
    async update(id: string, ride: RideEntity): Promise<RideEntity> {
        const persistedBusiness: RideEntity = await this.rideRepository.findOne({where:{id}});
        // Manage error with class 
        //if (!persistedBusiness)
        //  throw new BusinessLogicException("The business with the given id was not found", BusinessError.NOT_FOUND);
        ride.id = id; 
        return await this.rideRepository.save(ride);
    }
    
    // Delete 
    async delete(id: string) {
        const ride: RideEntity = await this.rideRepository.findOne({where:{id}});
        // Manage error with class 
        //if (!business)
        //  throw new BusinessLogicException("The business with the given id was not found", BusinessError.NOT_FOUND);
        await this.rideRepository.remove(ride);
    }
}
