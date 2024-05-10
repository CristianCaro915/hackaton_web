import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarEntity } from './entity/car.entity';
import { BusinessLogicException, BusinessLogicError} from '../shared/errors/businessLogicError';


@Injectable()
export class CarService{
    // Constructor
    constructor(
        @InjectRepository(CarEntity)
        private readonly carRepository: Repository<CarEntity>
    ){}

    // Functions

    // Create
    async create(car: CarEntity): Promise<CarEntity>{
        return await this.carRepository.save(car)
    }

    // Get all
    async findAll(): Promise<CarEntity[]>{
        return await this.carRepository.find();
    }

    // Get by id
    async findOne(id: string): Promise<CarEntity>{
        const car: CarEntity = await this.carRepository.findOne({where:{id}});
        // Manage error with class 
        if(!car)
            throw new BusinessLogicException("The car with the given id was not found", BusinessLogicError.NOT_FOUND);
        return car
    }

    // Update
    async update(id: string, car: CarEntity): Promise<CarEntity> {
        const persistedCar: CarEntity = await this.carRepository.findOne({where:{id}});
        // Manage error with class 
        if (!persistedCar)
          throw new BusinessLogicException("The car with the given id was not found", BusinessLogicError.NOT_FOUND);
        car.id = id; 
        return await this.carRepository.save(car);
    }
    
    // Delete 
    async delete(id: string) {
        const car: CarEntity = await this.carRepository.findOne({where:{id}});
        // Manage error with class 
        if (!car)
          throw new BusinessLogicException("The car with the given id was not found", BusinessLogicError.NOT_FOUND);
        await this.carRepository.remove(car);
    }
}

