//import { ArtworkEntity } from '../../artwork/artwork.entity/artwork.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CarEntity {
    // Main atributes
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    plate: string;
    @Column()
    brand: string;
    @Column()
    reference: string;
    @Column()
    color: string;

}