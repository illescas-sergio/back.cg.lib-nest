import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
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
  getAllAuthors(
    @Query('first_name') first_name: string,
    @Query('last_name') last_name: string,
  ) {
    if (first_name && last_name) {
      return this.authorsService.findAuthorByCompleteName(
        first_name,
        last_name,
      );
    }
    return this.authorsService.getAuthors();
  }

  @Get('/:id')
  getOneAuthor(@Param('id') id: string) {
    return this.authorsService.getAuthor(id);
  }

  @Post('/')
  @UsePipes(new ValidationPipe())
  addNewAuthor(@Body() author: authorDTO) {
    return this.authorsService.createAuthor(author);
  }

  @Put('/:id')
  @UsePipes(new ValidationPipe())
  updateOneAuthor(@Param('id') id: string, @Body() author: authorDTO) {
    return this.authorsService.updateAuthor(id, author);
  }

  @Delete('/:id')
  deleteOneAuthor(@Param('id') id: string) {
    return this.authorsService.deleteAuthor(id);
  }
}
