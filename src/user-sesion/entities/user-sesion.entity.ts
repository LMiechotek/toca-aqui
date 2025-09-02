import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserSesion {
    @PrimaryGeneratedColumn()
    id: number;
}