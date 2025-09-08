import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly personRepository: Repository<Lesson>,
  ) { }

  async create(createPersonDto: CreateLessonDto) {
    try {
      const personData = {
        name: createPersonDto.name,
        email: createPersonDto.email,
        mobile_number: createPersonDto.mobile_number,
        cpf: createPersonDto.cpf,
      };

      const newPerson = this.personRepository.create(personData);
      await this.personRepository.save(newPerson);
      return newPerson;
    } catch (error) {
      if (error === '23505') {
        throw new ConflictException('Email is already in use.');
      }

      throw error;
    }
  }

  async findAll() {
    const persons = await this.personRepository.find({
      order: {
        id: 'desc',
      },
    });

    return persons
  }

  async findAllProfessors(){
    const professors = await this.personRepository.createQueryBuilder('Person')
    .innerJoinAndSelect(Authority, 'authority', 'person.id = authority.person_id')
    .where(`authority.permission = ${Permission.TEACHER}`) 
    .getMany()

    return professors
  }

  async findOneProfessor(id: number) : Promise<JSON> {
    const professor = await this.personRepository.createQueryBuilder('Person')
    .innerJoinAndSelect(Authority, 'authority', 'person.id = authority.person_id')
    .where(`authority.permission = ${Permission.TEACHER}`)
    .andWhere(`person.id = ${id}`)
    .getOne()

    return professor
  }


  async findOne(id: bigint) {
    const person = await this.personRepository.findOneBy({
      id,
    });

    if(!person) {
      throw new NotFoundException('Person not found.');
    }

    return person;
  }

  async update(id: bigint, updatePersonDto: UpdatePersonDto) {
    const personData = {

    }
  }

  async remove(id: bigint) {
    const person = await this.personRepository.findOneBy({
      id,
    });

    if (!person) {
      throw new NotFoundException('Person not found.');
    }

    return this.personRepository.remove(person);
  }
}
