//import { ArtworkEntity } from '../../artwork/artwork.entity/artwork.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//import foreign relations
import { CarEntity } from 'src/car/entity/car.entity';
import { DriverEntity } from 'src/driver/entity/driver.entity';
import { PaymentEntity } from 'src/payment/entity/payment.entity';
import { UserEntity } from 'src/user/entity/user.entity';


@Entity()
export class RideEntity {
    // Main atributes
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    route: Array<String>;
    @Column()
    userLocation: string;
    @Column()
    destination: string;
    @Column()
    startHour: string;
    @Column()
    endHour: string;
    @Column()
    price: string;
    @Column()
    active: Boolean;

    // Define foreign relations
    @Column()
    payment: PaymentEntity
    @Column()
    user: UserEntity 
    @Column()
    driver: DriverEntity
    @Column()
    car: CarEntity

}