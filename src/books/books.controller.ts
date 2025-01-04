import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  private booksService: BooksService;

  constructor(booksService: BooksService) {
    this.booksService = booksService;
  }

  @Get('/')
  getAllBooks() {
    return this.booksService.getAllBooks();
  }

  @Get('/:id')
  getBook(@Param('id') id: string) {
    return this.booksService.getBook(id);
  }

  @Post('/')
  addBook() {
    return this.booksService.postBook();
  }

  @Put('/')
  updateBook() {
    return this.booksService.putBook();
  }

  @Delete('/')
  delBook() {
    return this.booksService.deleteBook();
  }
}
