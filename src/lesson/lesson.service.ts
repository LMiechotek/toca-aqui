import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { Repository } from 'typeorm';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { Person } from 'src/person/entities/person.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
  ) { }

  async create(CreateLessonDto: CreateLessonDto) {
    try {
      const lessonData = {
        author_id: CreateLessonDto.author_id,
        price: CreateLessonDto.price,
        scheduled: CreateLessonDto.scheduled,
        galley_pictures: CreateLessonDto.galleyPictures,

      };

      const newLesson = this.lessonRepository.create(lessonData);
      await this.lessonRepository.save(newLesson);
      return newLesson;
    } catch (error) {
      if (error === '23505') {
        throw new ConflictException('Email is already in use.');
      }

      throw error;
    }
  }

  async findAll() {
    const lessons = await this.lessonRepository.find({
      order: {
        course_id: 'desc',
        student_id: 'desc'
      },
    });

    return lessons
  }

  async findAllStudents(){
    const students = await this.lessonRepository.createQueryBuilder('Lesson')
    .innerJoinAndSelect(Person, 'person', 'Lesson.student_id = person_id')
    .where(`person.id = Lesson.student_id`) 
    .getMany()

    return students
  }

  async findOneProfessor(id: number) : Promise<JSON> {
    const student = await this.lessonRepository.createQueryBuilder('Lesson')
    .innerJoinAndSelect(Person, 'person', 'Lesson.student_id = person_id')
    .where(`person.id = Lesson.student_id`) 
    .andWhere(`Lesson.student_id = ${id}`)
    .getOne()

    return student
  }


  async findOne(id: number) {
    const lesson = await this.lessonRepository.findOneBy({
      course_id,

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
    const person = await this.lessonRepository.findOneBy({
      id,
    });

    if (!person) {
      throw new NotFoundException('Person not found.');
    }

    return this.lessonRepository.remove(person);
  }
}
