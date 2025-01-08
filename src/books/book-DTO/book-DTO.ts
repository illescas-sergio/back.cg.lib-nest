import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { dateFormatter } from 'src/customPipes/dateFormatter';

export class bookDTO {
  @IsString()
  @IsNotEmpty()
  author: string;
  @IsNotEmpty()
  publisher: string;
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  category: string;
  @IsNumber()
  price: number;
  @IsString()
  @Transform(({ value }) => dateFormatter(value))
  release_date: string;
  @IsString()
  description: string;
}
