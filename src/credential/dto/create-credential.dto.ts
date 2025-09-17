import { IsEmail, isNotEmpty, IsNotEmpty, IsNumber, IsString, isTimeZone, IsTimeZone, MaxLength, MinLength } from "class-validator";
import { Course } from "src/course/entities/course.entity";
import { Person } from "src/person/entities/person.entity";
import { JoinColumn, ManyToOne, OneToOne } from "typeorm";

export class CreateCredentialDto {
    @OneToOne(() => Person, (person) => person.id)
    @JoinColumn({name: 'person_id'})
    person: Person;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    scheduled: TimeRanges;

    @IsString()
    galleyPictures: File;

    @IsNumber()
    previous_id: Number;

    @IsNumber()
    author_id: Number;

    valid_from: TimeRanges;

    valid_to: TimeRanges;
    
}