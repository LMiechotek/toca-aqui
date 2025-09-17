import { Column, Entity, PrimaryColumn } from "typeorm";

 

 @Entity()
 export class Category{
    @PrimaryColumn()
    id: number

    @Column()
    name: String

    @Column()
    description: Text

    @Column()
    logo_picture: File
 }