import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePersonDto {
    @IsString({message:''})
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(100)
    name: string;

    @IsEmail()
    email:string;

    @IsString()
    @MaxLength(13)
    mobile_number: string;


    @IsString()
    @MaxLength(11)
    cpf: string;

    
}
