import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Book } from './bookSchema/bookSchema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BooksService {
  // eslint-disable-next-line no-unused-vars
  constructor(@InjectModel('Book') private bookModel: Model<Book>) {}

  async getAllBooks(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async getBook(id: string): Promise<Book[]> {
    return this.bookModel.findById(id);
  }

  postBook() {
    return 'agregando libro';
  }

  putBook() {
    return 'modificando libro';
  }

  deleteBook() {
    return 'borrando libro';
  }
}
