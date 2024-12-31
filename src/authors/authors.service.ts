import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorsService {
  getAuthors() {
    return ['author 1', 'author 2'];
  }
}
