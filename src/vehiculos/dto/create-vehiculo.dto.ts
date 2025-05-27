import {
  IsString,
  IsNumber,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

class PapelesDto {
  @IsString()
  seguro: string;

  @IsString()
  cedulaVerde: string;

  @IsString()
  cedulaAzul: string;

  @IsString()
  permisoManejo: string;
}

class BateriaDto {
  @IsString()
  modelo: string;

  @IsOptional()
  @IsString()
  foto?: string; // opcional porque es nullable en entidad
}

class GomasDto {
  @IsString()
  marca: string;

  @IsString()
  tamaño: string;

  @IsString()
  detalle: string;
}

class EquipamientoDto {
  @IsString()
  gato: string;

  @IsString()
  llave: string;

  @IsString()
  antirrobo: string;
}

export class CreateVehiculoDto {
  @IsString()
  patente: string;

  @IsString()
  color: string;

  @IsString()
  modelo: string;

  @IsNumber()
  anio: number;

  @IsString()
  ubicacion: string;

  @ValidateNested()
  @Type(() => PapelesDto)
  papeles: PapelesDto;

  @ValidateNested()
  @Type(() => BateriaDto)
  bateria: BateriaDto;

  @ValidateNested()
  @Type(() => GomasDto)
  gomas: GomasDto;

  @ValidateNested()
  @Type(() => EquipamientoDto)
  equipamiento: EquipamientoDto;
}
