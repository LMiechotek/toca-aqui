import { IsNotEmpty, IsString } from "class-validator";


export class createCategoryDto{
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    description: string

    @IsString()
    logo_picture: Buffer

}