import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lesson {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    course_id: Number;

    @Column()
    student_id: Number;

    @Column()
    price: Number;

    @Column({type: "timestamptz"})
    scheduled: Date;

    @Column()
    galery_pictures: File;

    @Column()
    previous_id: Number;

    @Column()
    author_id: Number;

    @Column({type: "timestamptz"})
    valid_from: Date;

    @Column({type: "timestamptz"})
    valid_to: Date;
}
