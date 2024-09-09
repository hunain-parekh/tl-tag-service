

import { Injectable } from '@nestjs/common';
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
    return this.tagModel.findById(id).exec();
  }

  async update(id: string, updateTagDto: Partial<Tag>): Promise<Tag> {
    return this.tagModel.findByIdAndUpdate(id, updateTagDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Tag> {
    return this.tagModel.findByIdAndDelete(id).exec();
  }
}
