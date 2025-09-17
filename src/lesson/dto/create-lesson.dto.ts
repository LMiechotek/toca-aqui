import { IsDate, IsEmail, isNotEmpty, IsNotEmpty, IsNumber, IsString, isTimeZone, IsTimeZone, MaxLength, MinLength } from "class-validator";
import { Course } from "src/course/entities/course.entity";
import { JoinColumn, ManyToOne } from "typeorm";
import { Timestamp } from "typeorm/browser";

export class CreateLessonDto {
    @ManyToOne(() => Course, (course) => course.id)
    @JoinColumn({name: 'course_id'})
    course: Course;


    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    scheduled: Date;

    @IsString()
    galleyPictures: File;

    @IsNumber()
    previous_id: Number;

    @IsNumber()
    author_id: Number;

    @IsDate()
    valid_from: Date;

    @IsDate()
    valid_to: Date;
    
}