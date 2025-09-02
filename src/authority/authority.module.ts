import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Authority } from "./entities/authority.entity";
import { PersonModule } from "src/person/person.module";

@Module({
    imports:[TypeOrmModule.forFeature([Authority]), PersonModule],
    controllers: [],
    providers: [],
    exports: [],
})
export class AuthorityModule {}