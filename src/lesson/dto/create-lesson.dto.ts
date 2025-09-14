import { IsEmail, isNotEmpty, IsNotEmpty, IsNumber, IsString, isTimeZone, IsTimeZone, MaxLength, MinLength } from "class-validator";
import { Course } from "src/course/entities/course.entity";
import { JoinColumn, ManyToOne } from "typeorm";

export class CreateLessonDto {
    @ManyToOne(() => Course, (course) => course.id)
    @JoinColumn({name: 'course_id'})
    course: Course;


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