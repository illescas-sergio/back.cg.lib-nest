import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { authorDTO } from './author-DTO/author-DTO';

@Controller('authors')
export class AuthorsController {
  private authorsService: AuthorsService;

  constructor(authorsService: AuthorsService) {
    this.authorsService = authorsService;
  }
  @Get('/')
  getAllAuthors() {
    return this.authorsService.getAuthors();
  }

  @Get('/:id')
  getOneAuthor(@Param('id') id: string) {
    return this.authorsService.getAuthor(id);
  }

  @Post('/')
  addNewAuthor(@Body() author: authorDTO) {
    return this.authorsService.createAuthor(author);
  }

  @Put('/:id')
  updateOneAuthor(@Param('id') id: string, @Body() author: authorDTO) {
    return this.authorsService.updateAuthor(id, author);
  }

  @Delete('/:id')
  deleteOneAuthor(@Param('id') id: string) {
    return this.authorsService.deleteAuthor(id);
  }
}
