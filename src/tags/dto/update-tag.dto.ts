import { PartialType } from '@nestjs/mapped-types';
import { Tag } from './tags.dto';

export class UpdateTagDto extends PartialType(Tag) {}
