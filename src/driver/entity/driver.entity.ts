//import { ArtworkEntity } from '../../artwork/artwork.entity/artwork.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

// Import relational classes
import {CarEntity} from '../../car/entity/car.entity';
import { RideEntity } from 'src/ride/entity/ride.entity';
import { PaymentEntity } from 'src/payment/entity/payment.entity';

@Entity()
export class DriverEntity {
    // Main atributes
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
    @Column()
    licenceExpDate: string;
    @Column()
    score: string;

    // Define foreign relations
    @OneToMany(() => CarEntity, car => car.id)
    cars: CarEntity[];

    @OneToMany(() => RideEntity, ride => ride.id)
    rides: RideEntity[];

    @OneToMany(() => PaymentEntity, payment => payment.id)
    payments: PaymentEntity[];

}