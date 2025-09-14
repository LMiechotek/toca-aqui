import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';


@Controller('lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Post()
  create(@Body() createLessonDto: CreateLessonDto) {
    return this.lessonService.create(createLessonDto);
  }

  @Get()
  findAll() {
    return this.lessonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.lessonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePersonDto: UpdateLessonDto) {
    return this.lessonService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.lessonService.remove(+id);
  }
}
