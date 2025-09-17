import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Course{
    @PrimaryColumn()
    id: number;

    @Column()
    teacher_id: number;

    @Column()
    description: Text;

    @Column()
    lesson_price: number;

    @Column()
    thumbnail_picture: File

    @Column()
    gallery_picture: File

}

