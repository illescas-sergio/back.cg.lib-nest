import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PublishersService } from './publishers.service';
import { publisherDTO } from './publisher-DTO/publisher-DTO';

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

  @Get('/:id')
  getOnePublisher(@Param('id') id: string) {
    return this.publishersService.getPublisher(id);
  }

  @Post('/')
  addPublisher(@Body() publisher: publisherDTO) {
    return this.publishersService.createPublisher(publisher);
  }

  @Put('/:id')
  updatePublisherData(
    @Param('id') id: string,
    @Body() publisher: publisherDTO,
  ) {
    return this.publishersService.updatePublisher(id, publisher);
  }

  @Delete('/:id')
  deletePublisher(@Param('id') id: string) {
    return this.publishersService.deletePublisher(id);
  }
}
