import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from './authorSchema/authorSchema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Author',
        schema: AuthorSchema,
      },
    ]),
  ],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}
