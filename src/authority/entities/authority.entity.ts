import { Permission } from "src/common/enums/permission.enum";
import { Person } from "src/person/entities/person.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Authority {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    permission: Permission;

    @Column()
    person_id : number;
    @ManyToOne(() => Person, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({})

    @Column({ type: "timestamp with time zone", default: () => "now()" })
    valid_from: Date;

    @Column({ type: "timestamp with time zone" })
    valid_to: Date;
}