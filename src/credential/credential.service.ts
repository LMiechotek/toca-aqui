import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Authority } from 'src/authority/entities/authority.entity';
import { Permission } from 'src/common/enums/permission.enum';

@Injectable()
export class credentialService {
  constructor(
    @InjectRepository(Credential)
    private readonly credentialRepository: Repository<Credential>,
  ) { }

  async create(createPersonDto: CreatePersonDto) {
    try {
      const personData = {
        name: createPersonDto.name,
        email: createPersonDto.email,
        mobile_number: createPersonDto.mobile_number,
        cpf: createPersonDto.cpf,
      };

      const newPerson = this.credentialRepository.create(personData);
      await this.credentialRepository.save(newPerson);
      return newPerson;
    } catch (error) {
      if (error === '23505') {
        throw new ConflictException('Email is already in use.');
      }

      throw error;
    }
  }

  async findAll() {
    const persons = await this.credentialRepository.find({
      order: {
        id: 'desc',
      },
    });

    return persons
  }

  async findAllProfessors(){
    const professors = await this.credentialRepository.createQueryBuilder('Person')
    .innerJoinAndSelect(Authority, 'authority', 'person.id = authority.person_id')
    .where(`authority.permission = ${Permission.TEACHER}`) 
    .getMany()

    return professors
  }

  async findOneProfessor(id: number) : Promise<Person | null> {
    const professor = await this.credentialRepository.createQueryBuilder('Person')
    .innerJoinAndSelect(Authority, 'authority', 'person.id = authority.person_id')
    .where(`authority.permission = ${Permission.TEACHER}`)
    .andWhere(`person.id = ${id}`)
    .getOne()

    return professor
  }


  async findOne(id: number) {
    const person = await this.credentialRepository.findOneBy({
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
    const person = await this.credentialRepository.findOneBy({
      id,
    });

    if (!person) {
      throw new NotFoundException('Person not found.');
    }

    return this.credentialRepository.remove(person);
  }
}
