import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author } from './authorSchema/authorSchema';
import { authorDTO } from './author-DTO/author-DTO';

@Injectable()
export class AuthorsService {
  // eslint-disable-next-line no-unused-vars
  constructor(@InjectModel('Author') private authorModel: Model<Author>) {}

  async getAuthors(): Promise<Author[]> {
    return this.authorModel.find().exec();
  }

  async getAuthor(id: string): Promise<Author[]> {
    return this.authorModel.findById(id);
  }

  async createAuthor(author: authorDTO) {
    return this.authorModel.create({
      first_name: author.first_name,
      last_name: author.last_name,
      dni: author.dni,
      country: author.country,
    });
  }

  async updateAuthor(id: string, author: authorDTO) {
    return this.authorModel.updateOne(
      {
        _id: id,
      },
      {
        first_name: author.first_name,
        last_name: author.last_name,
        dni: author.dni,
        country: author.country,
      },
    );
  }

  async deleteAuthor(id: string) {
    return this.authorModel.deleteOne({ _id: id });
  }
}
