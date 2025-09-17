import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';
import { Authority } from 'src/authority/entities/authority.entity';
import { Permission } from 'src/common/enums/permission.enum';
import { Lesson } from 'src/lesson/entities/lesson.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) { }

  async create(createPersonDto: CreatePersonDto) {
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

  async findAllTeachers(){
   
    const professors = await this.personRepository.createQueryBuilder('Person')
    .innerJoin(Authority, 'authority', 'person.id = authority.person_id')
    .where(`authority.permission = ${Permission.TEACHER}`)
    .innerJoinAndSelect(Lesson, 'lesson', 'person.id = lesson.student_id')
    .where('lesson.student_id = person.id')
    .getMany() 

    return professors
  }

  async findOneProfessor(id: number) : Promise<Person | null> {
    const professor = await this.personRepository.createQueryBuilder('Person')
    .innerJoin(Authority, 'authority', 'person.id = authority.person_id')
    .where(`authority.permission = ${Permission.TEACHER}`)
    .innerJoinAndSelect(Lesson, 'lesson', 'person.id = lesson.student_id')
    .where('lesson.student_id = person.id')
    .andWhere(`person.id = ${id}`)
    .getOne()

    return professor
  }


  async findOne(id: number) {
    const person = await this.personRepository.findOneBy({
      id,
    });

    if(!person) {
      throw new NotFoundException('Person not found.');
    }

    return person;
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    const personData = {

    }
  }

  async remove(id: number) {
    const person = await this.personRepository.findOneBy({
      id,
    });

    if (!person) {
      throw new NotFoundException('Person not found.');
    }

    return this.personRepository.remove(person);
  }
}
