import { Controller, Get } from '@nestjs/common';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
  authorsService: AuthorsService;

  constructor(authorsService: AuthorsService) {
    this.authorsService = authorsService;
  }
  @Get('/')
  getAllAuthors() {
    return this.authorsService.getAuthors();
  }
}
