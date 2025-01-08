import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Publisher } from './publisherSchema/publisherSchema';
import { Model } from 'mongoose';
import { publisherDTO } from './publisher-DTO/publisher-DTO';

@Injectable()
export class PublishersService {
  constructor(
    // eslint-disable-next-line no-unused-vars
    @InjectModel('Publisher') private publisherModel: Model<Publisher>,
  ) {}

  async getPublishers(): Promise<Publisher[]> {
    return this.publisherModel.find().exec();
  }

  async getPublisher(id: string): Promise<Publisher[]> {
    return this.publisherModel.findById(id);
  }

  async getPublisherByName(name: string): Promise<Publisher[]> {
    return this.publisherModel.find({ name: name }).exec();
  }

  async createPublisher(publisher: publisherDTO) {
    return this.publisherModel.create({
      name: publisher.name,
      cuil: publisher.cuil,
      address: publisher.address,
    });
  }

  async updatePublisher(id: string, publisher: publisherDTO) {
    return this.publisherModel.updateOne(
      {
        _id: id,
      },
      {
        name: publisher.name,
        cuil: publisher.cuil,
        address: publisher.address,
      },
    );
  }

  async deletePublisher(id: string) {
    return this.publisherModel.deleteOne({ _id: id });
  }
}
