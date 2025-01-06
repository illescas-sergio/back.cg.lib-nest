import { IsString, Matches, MinLength } from 'class-validator';

export class authorDTO {
  @IsString()
  @MinLength(1)
  first_name: string;
  @IsString()
  @MinLength(1)
  last_name: string;
  @Matches(/^\d{8}$/, {
    message: 'El DNI debe tener exactamente 8 caracteres.',
  })
  dni: number;
  @IsString()
  country: string;
}
