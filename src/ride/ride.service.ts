import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RideEntity } from './entity/ride.entity';
import { BusinessLogicException, BusinessLogicError} from '../shared/errors/businessLogicError';


@Injectable()
export class RideService{
    // Constructor
    constructor(
        @InjectRepository(RideEntity)
        private readonly rideRepository: Repository<RideEntity>
    ){}

    // Functions

    // Create
    async create(business: RideEntity): Promise<RideEntity>{
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
        if(!ride)
            throw new BusinessLogicException("The ride with the given id was not found", BusinessLogicError.NOT_FOUND);
        return ride
    }

    // Update
    async update(id: string, ride: RideEntity): Promise<RideEntity> {
        const persistedRide: RideEntity = await this.rideRepository.findOne({where:{id}});
        // Manage error with class 
        if (!persistedRide)
          throw new BusinessLogicException("The ride with the given id was not found", BusinessLogicError.NOT_FOUND);
        ride.id = id; 
        return await this.rideRepository.save(ride);
    }
    
    // Delete 
    async delete(id: string) {
        const ride: RideEntity = await this.rideRepository.findOne({where:{id}});
        // Manage error with class 
        if (!ride)
          throw new BusinessLogicException("The ride with the given id was not found", BusinessLogicError.NOT_FOUND);
        await this.rideRepository.remove(ride);
    }
}
