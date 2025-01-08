import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { bookDTO } from './book-DTO/book-DTO';
import { DateTransformPipe } from 'src/customPipes/dateTransformPipe';

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
  @UsePipes(new ValidationPipe())
  addBook(@Body() book: bookDTO) {
    return this.booksService.postBook(book);
  }

  @Put('/:id')
  @UsePipes(new ValidationPipe())
  updateBook(
    @Param('id') id: string,
    @Body('release_date', new DateTransformPipe()) book: bookDTO,
  ) {
    return this.booksService.putBook(id, book);
  }

  @Delete('/:id')
  delBook(@Param('id') id: string) {
    return this.booksService.deleteBook(id);
  }
}
