import { IsEmail, IsNotEmpty, IsString, IsTimeZone, MaxLength, MinLength } from "class-validator";

export class CreateLessonDto {
    @IsNotEmpty()
    price: number;

    scheduled: TimeRanges;

    @IsFil
    galleyPictures: File;


    @IsString()
    @MaxLength(11)
    cpf: string;

    
}