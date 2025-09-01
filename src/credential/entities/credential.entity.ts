import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Credential {
    @PrimaryGeneratedColumn()
    id: bigint;

    @Column({ type: "varchar"})
    password: string;
}