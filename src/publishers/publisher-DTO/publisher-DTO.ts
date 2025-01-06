import { IsString, Matches, MinLength } from 'class-validator';

export class publisherDTO {
  @IsString()
  @MinLength(1)
  name: string;

  @IsString()
  @MinLength(1)
  address: string;

  @Matches(/^\d{2}-\d{8}-\d{1}$/, {
    message: 'CUIL debe tener el formato requerido',
  })
  cuil: string;
}
