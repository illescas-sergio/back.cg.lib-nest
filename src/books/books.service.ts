import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Book } from './bookSchema/bookSchema';
import { InjectModel } from '@nestjs/mongoose';
import { bookDTO } from './book-DTO/book-DTO';
import { AuthorsService } from 'src/authors/authors.service';
import { authorsSeparator } from 'src/customPipes/authorsSeparator';
import { nameSplit } from 'src/customPipes/fullNameSplitter';
import { manyAuthorsSeparator } from 'src/customPipes/authorsConsulting';
import { PublishersService } from 'src/publishers/publishers.service';
import { dateFormatter } from 'src/customPipes/dateFormatter';

@Injectable()
export class BooksService {
  constructor(
    // eslint-disable-next-line no-unused-vars
    @InjectModel('Book') private bookModel: Model<Book>,
    // eslint-disable-next-line no-unused-vars
    private readonly authorsService: AuthorsService,
    // eslint-disable-next-line no-unused-vars
    private readonly publishersService: PublishersService,
  ) {}

  async getAllBooks(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async getBook(id: string): Promise<Book[]> {
    return this.bookModel.findById(id);
  }

  async postBook(book: bookDTO) {
    const authorIds: any[] = [];
    const { author } = book;
    //Validar autores
    const authorNames = authorsSeparator(author);
    if (authorNames.length === 0) {
      const { first_name, last_name } = nameSplit(author);
      const authorId = await this.authorsService.findAuthorIdByCompleteName(
        first_name,
        last_name,
      );
      if (authorId.length === 0) {
        throw new HttpException('Not found', HttpStatus.NOT_FOUND);
      }
      authorIds.push(authorId[0]['_id']);
    } else {
      const arrayAuthors = manyAuthorsSeparator(authorNames);
      try {
        for (const el of arrayAuthors) {
          const { first_name, last_name } = el;
          const authorExist =
            await this.authorsService.findAuthorIdByCompleteName(
              first_name,
              last_name,
            );
          if (authorExist.length < 1) {
            throw new HttpException(
              `Autor no encontrado: ${first_name} ${last_name}`,
              HttpStatus.NOT_FOUND,
            );
          }
          authorIds.push(authorExist[0]._id);
        }
      } catch (err) {
        return err;
      }
    }

    // Validar editorial
    const { publisher } = book;
    let publisherId: any = '';
    try {
      const publisherExist =
        await this.publishersService.getPublisherByName(publisher);
      if (publisherExist.length < 1) {
        throw new HttpException(
          'No se encuentra la editorial',
          HttpStatus.NOT_FOUND,
        );
      }
      publisherId = publisherExist[0]['_id'];
    } catch (err) {
      return err.message;
    }
    // Fecha
    const verifiedReleaseDate = dateFormatter(book.release_date);

    return this.bookModel.create({
      author: authorIds,
      publisher: publisherId,
      title: book.title,
      category: book.category,
      price: book.price,
      release_date: verifiedReleaseDate,
      description: book.description,
    });
  }

  async putBook(id: string, book: bookDTO) {
    //Debería Validar autores aca tambien
    return this.bookModel.updateOne(
      {
        _id: id,
      },
      {
        author: book.author,
        publisher: book.publisher,
        title: book.title,
        category: book.category,
        price: book.price,
        release_date: book.release_date,
        description: book.description,
      },
    );
  }

  async deleteBook(id: string) {
    return this.bookModel.deleteOne({ _id: id });
  }
}
