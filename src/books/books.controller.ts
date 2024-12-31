import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  booksService: BooksService;

  constructor(bookservice: BooksService) {
    this.booksService = bookservice;
  }
  @Get('/')
  getAllBooks() {
    return this.booksService.getBooks();
  }
}
