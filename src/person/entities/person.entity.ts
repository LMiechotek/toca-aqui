import { IsEmail } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false })
    name: string;

    @Column({nullable: false, unique: true })
    @IsEmail()
    email: string;

    @Column({length: 13})
    mobile_number: string;

    @Column({length:11})
    cpf: string;

    @Column({type: "bytea"})
    profile_picture:Buffer;

    @Column()
    previous_id: number;

    @Column()
    author_id: number;

    @Column({ type: "timestamp with time zone", default:() => "now()"})
    valid_from: Date;

    @Column({ type: "timestamp with time zone"})
    valid_to: Date;
}
