import { IsEmail, isNotEmpty, IsNotEmpty, IsNumber, IsString, isTimeZone, IsTimeZone, MaxLength, MinLength } from "class-validator";

export class CreateLessonDto {
    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    scheduled: TimeRanges;

    @IsFile()
    galleyPictures: File;

    @IsNumber()
    previous_id: Number;

    @IsNumber()
    author_id: Number;

    valid_from: TimeRanges;

    valid_to: TimeRanges;
    
}