import { IsEmail } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varying character", nullable: false })
    name: string;

    @Column({ type: "varying character", nullable: false, unique: true })
    @IsEmail()
    email: string;

    @Column({ type: "varying character", length: 13})
    mobile_number: string;

    @Column({ type: "varying character", length:11})
    cpf: string;

    @Column()
    profile_picture:string;

    @Column()
    previous_id: number;

    @Column()
    author_id: number;

    @Column({ type: "timestamp with time zone", default:() => "now()"})
    valid_from: Date;

    @Column({ type: "timestamp with time zone"})
    valid_to: Date;
}
