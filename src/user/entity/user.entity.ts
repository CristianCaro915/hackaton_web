//import { ArtworkEntity } from '../../artwork/artwork.entity/artwork.entity';

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

// Import relational classes
import { PaymentEntity } from 'src/payment/entity/payment.entity';
import { RideEntity } from 'src/ride/entity/ride.entity';

@Entity()
export class UserEntity {
    // Main atributes
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
    @Column()
    score: string;

    // Define foreign relations

    @OneToMany(() => PaymentEntity, payment => payment.id)
    payments: PaymentEntity[];
   
    @OneToMany(() => RideEntity, ride => ride.id)
    rides: RideEntity[];

}