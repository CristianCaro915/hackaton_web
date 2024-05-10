//import { ArtworkEntity } from '../../artwork/artwork.entity/artwork.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PaymentEntity {
    // Main atributes
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    type: string;
    @Column()
    number: string;
    @Column()
    expDate: string;
}