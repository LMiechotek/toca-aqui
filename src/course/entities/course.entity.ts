import { text } from "stream/consumers";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Course{
    @PrimaryColumn()
    id: number;

    @Column()
    teacher_id: number;

    @Column({type: "text"})
    description: String;

    @Column()
    lesson_price: number;

    @Column({type: "bytea"})
    thumbnail_picture: Buffer

    @Column({type: "bytea"})
    galery_pictures: Buffer

}

