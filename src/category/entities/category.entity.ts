import { Column, Entity, PrimaryColumn } from "typeorm";

 

 @Entity()
 export class Category{
    @PrimaryColumn()
    id: number

    @Column()
    name: String

    @Column({type: "text"})
    description: string

    @Column()
    logo_picture: File
 }