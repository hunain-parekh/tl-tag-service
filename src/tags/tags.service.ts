

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag } from '../tags/dto/tags.dto';

@Injectable()
export class TagsService {
  constructor(@InjectModel('Tag') private readonly tagModel: Model<Tag>) {}

  async create(Tag: Partial<Tag>): Promise<Tag> {
    const newTag = new this.tagModel(Tag);
    return newTag.save();
  }

  async findAll(): Promise<Tag[]> {
    return this.tagModel.find().exec();
  }

 

  async findOne(id: string): Promise<Tag> {
    const tag = await this.tagModel.findById(id).exec();
    if (!tag) {
      throw new NotFoundException(`Tag with ID "${id}" not found`);
    }
    return tag;
  }

 

  async update(id: string, updateTagDto: Partial<Tag>): Promise<Tag> {
    const updatedTag = await this.tagModel.findByIdAndUpdate(id, updateTagDto, { new: true }).exec();
    if (!updatedTag) {
      throw new NotFoundException(`Tag with ID "${id}" not found`);
    }
    return updatedTag;
  }



  async delete(id: string): Promise<Tag> {
    const deletedTag = await this.tagModel.findByIdAndDelete(id).exec();
    if (!deletedTag) {
      throw new NotFoundException(`Tag with ID "${id}" not found`);
    }
    return deletedTag;
  }
}
