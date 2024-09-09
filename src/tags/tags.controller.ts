// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import { TagsService } from './tags.service';
// import { CreateTagDto } from './dto/tags.dto';
// import { UpdateTagDto } from './dto/update-tag.dto';

// @Controller('tags')
// export class TagsController {
//   constructor(private readonly tagsService: TagsService) {}

//   @Post()
//   create(@Body() createTagDto: CreateTagDto) {
//     return this.tagsService.create(createTagDto);
//   }

//   @Get()
//   findAll() {
//     return this.tagsService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.tagsService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
//     return this.tagsService.update(+id, updateTagDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.tagsService.remove(+id);
//   }
// }


import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TagsService } from './tags.service';
import { Tag } from '../tags/dto/tags.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post('/add')
  async create(@Body() Tag: Partial<Tag>): Promise<Tag> {
    return this.tagsService.create(Tag);
  }

  @Get('/get')
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
