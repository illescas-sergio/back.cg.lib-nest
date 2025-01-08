import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Author } from '../../authors/authorSchema/authorSchema';
import { Publisher } from '../../publishers/publisherSchema/publisherSchema';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }] })
  author: Author[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Publisher' })
  publisher: Publisher[];

  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop()
  price: number;

  @Prop({ type: 'string' })
  release_date: mongoose.Date;

  @Prop()
  description: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
