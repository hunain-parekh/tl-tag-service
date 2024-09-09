import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TagsController } from './tags.controller';
import { TagSchema } from '../tags/entities/tag.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Tag', schema: TagSchema }]),

  ],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
