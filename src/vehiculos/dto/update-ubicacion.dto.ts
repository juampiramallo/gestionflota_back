import { IsString } from 'class-validator';

export class UpdateUbicacionDto {
  @IsString()
  ubicacion: string;
}
