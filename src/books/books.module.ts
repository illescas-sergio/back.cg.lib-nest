import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BookSchema } from './bookSchema/bookSchema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsModule } from 'src/authors/authors.module';
import { PublishersModule } from 'src/publishers/publishers.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Book',
        schema: BookSchema,
      },
    ]),
    AuthorsModule,
    PublishersModule,
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
