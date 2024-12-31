import { Injectable } from '@nestjs/common';

@Injectable()
export class PublishersService {
  getPublishers() {
    return ['edit1', 'edit2'];
  }
}
