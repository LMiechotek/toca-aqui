import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePersonDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(100)
    name: string;

    
}
