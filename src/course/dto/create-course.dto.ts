import { IsEmail, IsNotEmpty, IsNumber, isString, IsString, MaxLength, MinLength } from "class-validator";
import { Lesson } from "src/lesson/entities/lesson.entity";
import { Person } from "src/person/entities/person.entity";
import { JoinColumn, ManyToOne, OneToMany } from "typeorm";

export class CreateCourseDto {
    @ManyToOne(() => Person, (person) => person.id)
    @JoinColumn({name:'teacher_id'})
    person: Person;

    @IsString()
    @MaxLength(225)
    name: string;

    @IsString()
    description : string;

    @IsNumber()
    lesson_price: Number;

    @IsString()
    thumbnail_picture: Buffer;

    @IsString()
    galery_pictures: Buffer;

    @OneToMany(() => Lesson, (lesson) => lesson.course_id)
    lessons: Lesson[];
    
}
