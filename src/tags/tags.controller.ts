import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TagsService } from './tags.service';
import { Tag } from '../tags/dto/tags.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  async create(@Body() Tag: Partial<Tag>): Promise<Tag> {
    return this.tagsService.create(Tag);
  }

  @Get()
  async findAll(): Promise<Tag[]> {
    return this.tagsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Tag> {
    return this.tagsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTagDto: Partial<Tag>): Promise<Tag> {
    return this.tagsService.update(id, updateTagDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Tag> {
    return this.tagsService.delete(id);
  }
}
