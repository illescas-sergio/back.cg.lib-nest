import { Module } from '@nestjs/common';
import { PublishersController } from './publishers.controller';
import { PublishersService } from './publishers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PublisherSchema } from './publisherSchema/publisherSchema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Publisher',
        schema: PublisherSchema,
      },
    ]),
  ],
  controllers: [PublishersController],
  providers: [PublishersService],
  exports: [PublishersService],
})
export class PublishersModule {}
