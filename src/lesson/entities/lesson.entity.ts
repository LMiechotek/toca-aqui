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

    @Column()
    scheduled: TimeRanges;

    @Column()
    galery_pictures: File;

    @Column()
    previous_id: Number;

    @Column()
    author_id: Number;

    @Column()
    valid_from: TimeRanges;

    @Column()
    valid_to: TimeRanges;
}
