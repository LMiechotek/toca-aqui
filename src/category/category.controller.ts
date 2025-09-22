import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { createCategoryDto } from './dto/create-category.dto';
import { updateCategoryDto } from './dto/update-category.dto';


@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: createCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.categoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCategoryDto: updateCategoryDto) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.categoryService.remove(+id);
  }
}
