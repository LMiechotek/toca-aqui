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

  async findByEmail(email: string): Promise<Person | null> {
    return this.personRepo.findOne({
      where: { email },
      relations: ['credential', 'authorities'],
    });
  }
}
