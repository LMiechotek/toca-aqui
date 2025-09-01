import { Person } from "src/person/entities/person.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Authority {
    @PrimaryGeneratedColumn()
    id: bigint;

    //@ManyToOne(() => Person, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    //@JoinColumn({})

}