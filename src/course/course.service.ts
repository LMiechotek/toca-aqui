import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Course } from "./entities/course.entity";
import { Repository } from "typeorm";
import { CreateCourseDto } from "./dto/create-course.dto";
import { UpdateCourseDto } from "./dto/update-course.dto";

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) { }

  async create(createCourseDto: CreateCourseDto) {
      try {
        const courseData = {
          name: createCourseDto.name,
          description: createCourseDto.description,
          thumbnail: createCourseDto.thumbnail_picture,
          price: createCourseDto.lesson_price,
          gallery: createCourseDto.galery_pictures,
        };
  const newCourse = this.courseRepository.create(courseData);
        await this.courseRepository.save(newCourse);
        return newCourse;
      } catch (error) {
        if (error === '23505') {
          throw new ConflictException('already in use.');
        }
  
        throw error;
      }
}
async findAll() {
    const course = await this.courseRepository.find({
      order: {
        id: 'desc',
      },
    });

    return course
  }

  async findOne(id: number) {
      const course = await this.courseRepository.findOneBy({
        id,
      });
  
      if(!course) {
        throw new NotFoundException('Course not found.');
      }
  
      return course;
    }
  async update(id: number, updateCourseDto: UpdateCourseDto) {
      const courseData = {
  
      }
    }
  
    async remove(id: number) {
      const course = await this.courseRepository.findOneBy({
        id,
      });
  
      if (!course) {
        throw new NotFoundException('Course not found.');
      }
  
      return this.courseRepository.remove(course);
    }


}
