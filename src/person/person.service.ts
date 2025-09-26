import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepo: Repository<Person>,
  ) {}

  create(data: Partial<Person>) {
    const person = this.personRepo.create(data);
    return this.personRepo.save(person);
  }

  findAll() {
    return this.personRepo.find({ relations: ['credential', 'sessions', 'authorities'] });
  }

  findOne(id: number) {
    return this.personRepo.findOne({
      where: { id },
      relations: ['credential', 'sessions', 'authorities'],
    });
  }

  update(id: number, data: Partial<Person>) {
    return this.personRepo.update(id, data);
  }

  remove(id: number) {
    return this.personRepo.delete(id);
  }

  async findByEmail(email: string) {
    return this.personRepo.findOne({
      where: { email },
      relations: ['credential', 'authorities'],
    });
  }
}
