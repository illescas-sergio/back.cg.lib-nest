import { Controller, Get } from '@nestjs/common';
import { PublishersService } from './publishers.service';

@Controller('publishers')
export class PublishersController {
  publishersService: PublishersService;

  constructor(publishersService: PublishersService) {
    this.publishersService = publishersService;
  }

  @Get('/')
  getAllPublishers() {
    return this.publishersService.getPublishers();
  }
}
