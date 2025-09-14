import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonController } from "src/person/person.controller";
import { PersonService } from "src/person/person.service";

@Module({
    imports: [TypeOrmModule.forFeature([])],
    controllers: [PersonController],
    providers: [PersonService],
    exports: [PersonService],
})
export class LessonModule{}
