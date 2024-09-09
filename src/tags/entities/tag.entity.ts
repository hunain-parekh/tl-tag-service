
// import { Schema } from 'mongoose';

// export const TagSchema = new Schema({
//   id: { type: Schema.Types.UUID, required: true, unique: true },
//   name: { type: String, required: true },
//   created_at: { type: Date, default: Date.now },
//   updated_at: { type: Date, default: Date.now },
// });


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type TagDocument = Tag & Document;

@Schema()
export class Tag {
  @Prop({ type: String, default: uuidv4, unique: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop({ default: Date.now })
  updated_at: Date;
}

export const TagSchema = SchemaFactory.createForClass(Tag);