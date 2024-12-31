import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  getBooks() {
    return ['libro 1', 'libro 2'];
  }
}
