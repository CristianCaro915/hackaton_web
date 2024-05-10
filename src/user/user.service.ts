import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { BusinessLogicException, BusinessLogicError} from '../shared/errors/businessLogicError';


@Injectable()
export class UserService{
    // Constructor
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}

    // Functions

    // Create
    async create(business: UserEntity): Promise<UserEntity>{
        return await this.userRepository.save(business)
    }

    // Get all
    async findAll(): Promise<UserEntity[]>{
        return await this.userRepository.find();
    }

    // Get by id
    async findOne(id: string): Promise<UserEntity>{
        const user: UserEntity = await this.userRepository.findOne({where:{id}});
        // Manage error with class 
        if(!user)
            throw new BusinessLogicException("The user with the given id was not found", BusinessLogicError.NOT_FOUND);
        return user
    }

    // Update
    async update(id: string, ride: UserEntity): Promise<UserEntity> {
        const persistedDriver: UserEntity = await this.userRepository.findOne({where:{id}});
        // Manage error with class 
        if (!persistedDriver)
          throw new BusinessLogicException("The business with the given id was not found", BusinessLogicError.NOT_FOUND);
        ride.id = id; 
        return await this.userRepository.save(ride);
    }
    
    // Delete 
    async delete(id: string) {
        const user: UserEntity = await this.userRepository.findOne({where:{id}});
        // Manage error with class 
        if (!user)
          throw new BusinessLogicException("The user with the given id was not found", BusinessLogicError.NOT_FOUND);
        await this.userRepository.remove(user);
    }
}