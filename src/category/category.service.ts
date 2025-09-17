import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { createCategoryDto } from './dto/create-category.dto';
import { updateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ) {}

    async create(createCategoryDto: createCategoryDto) {
        try {
          const categoryData = {
            name: createCategoryDto.name,
            description: createCategoryDto.description,
            logo_picture: createCategoryDto.logo_picture
          };
    
          const newCategory = this.categoryRepository.create(categoryData);
          await this.categoryRepository.save(newCategory);
          return newCategory;
        } catch (error) {
          if (error === '23505') {
            throw new ConflictException('already in use.');
          }
    
          throw error;
        }
      }

    async findAll() {
    const category = await this.categoryRepository.find({
      order: {
        id: 'desc',
      },
    });

    return category
  }

    async findOne(id: number) {
        const category = await this.categoryRepository.findOneBy({
          id,
        });
    
        if(!category) {
          throw new NotFoundException('Category not found.');
        }
    
        return category;
      }

    async update(id: number, updateCategoryDto: updateCategoryDto) {
        const categoryDataData = {
    
        }
      }
    
    async remove(id: number) {
    const category = await this.categoryRepository.findOneBy({
      id,
    });

    if (!category) {
      throw new NotFoundException('category not found.');
    }

    return this.categoryRepository.remove(category);
  }
}

 