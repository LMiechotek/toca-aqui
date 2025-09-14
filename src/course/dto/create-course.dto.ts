import { IsEmail, IsNotEmpty, IsNumber, isString, IsString, MaxLength, MinLength } from "class-validator";
import { Person } from "src/person/entities/person.entity";
import { JoinColumn, ManyToOne } from "typeorm";

export class CreateCourseDto {
    @ManyToOne(() => Person, (person) => person.id)
    @JoinColumn({name:'teacher_id'})
    person: Person;

    @IsString()
    @MaxLength(225)
    name: string;

    @IsString()
    description : Text;

    @IsNumber()
    lesson_price: Number;

    @IsString()
    thumbnail_picture: File;

    @IsString()
    gallery_pictures: File;

    
}
