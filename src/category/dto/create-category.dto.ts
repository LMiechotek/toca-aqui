import { IsNotEmpty, IsString } from "class-validator";


export class createCategoryDto{
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    description: Text

    @IsString()
    logo_picture: File

}