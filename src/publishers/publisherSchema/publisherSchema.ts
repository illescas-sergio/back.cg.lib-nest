import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Book } from '../../books/bookSchema/bookSchema';

export type PublisherDocument = HydratedDocument<Publisher>;

@Schema()
export class Publisher {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  cuil: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }] })
  published_books: Book[];
}

export const PublisherSchema = SchemaFactory.createForClass(Publisher);
