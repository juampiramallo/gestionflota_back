import {
  IsString,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class PapelesUpdateDto {
  @IsOptional()
  @IsString()
  seguro?: string;

  @IsOptional()
  @IsString()
  cedulaVerde?: string;

  @IsOptional()
  @IsString()
  cedulaAzul?: string;

  @IsOptional()
  @IsString()
  permisoManejo?: string;
}

class BateriaUpdateDto {
  @IsOptional()
  @IsString()
  modelo?: string;

  @IsOptional()
  @IsString()
  foto?: string;
}

class GomasUpdateDto {
  @IsOptional()
  @IsString()
  marca?: string;

  @IsOptional()
  @IsString()
  tamaño?: string;

  @IsOptional()
  @IsString()
  detalle?: string;
}

class EquipamientoUpdateDto {
  @IsOptional()
  @IsString()
  gato?: string;

  @IsOptional()
  @IsString()
  llave?: string;

  @IsOptional()
  @IsString()
  antirrobo?: string;
}

export class UpdateVehiculoDto {
  @IsOptional()
  @IsString()
  ubicacion?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => PapelesUpdateDto)
  papeles?: PapelesUpdateDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => BateriaUpdateDto)
  bateria?: BateriaUpdateDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => GomasUpdateDto)
  gomas?: GomasUpdateDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => EquipamientoUpdateDto)
  equipamiento?: EquipamientoUpdateDto;
}
