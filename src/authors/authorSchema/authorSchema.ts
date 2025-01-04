import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Book } from '../../books/bookSchema/bookSchema';

export type AuthorDocument = HydratedDocument<Author>;

@Schema()
export class Author {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  dni: number;

  @Prop()
  country: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }] })
  books: Book[];
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
