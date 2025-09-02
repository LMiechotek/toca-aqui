import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CourseCategory {
    @PrimaryGeneratedColumn()
    id: number;
}