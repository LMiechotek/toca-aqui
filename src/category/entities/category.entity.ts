import { Column, Entity, PrimaryColumn } from "typeorm";

 

 @Entity()
 export class Category{
    @PrimaryColumn()
    id: number

    @Column()
    name: string

    @Column({type: "text"})
    description: string

   @Column({ type: 'bytea', nullable: true }) 
   logo_picture: Buffer;
 }