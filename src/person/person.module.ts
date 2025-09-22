import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Person])], // 👈 registra o repository da entidade
  providers: [PersonService],
  controllers: [PersonController],
  exports: [TypeOrmModule, PersonService], // 👈 exporta se for usar em outros módulos
})
export class PersonModule {}
