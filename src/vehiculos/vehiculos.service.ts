import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehiculo } from './entities/vehiculo.entity';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';

@Injectable()
export class VehiculosService {
  constructor(
    @InjectRepository(Vehiculo)
    private readonly vehiculoRepository: Repository<Vehiculo>,
  ) {}

  async create(createVehiculoDto: CreateVehiculoDto): Promise<Vehiculo> {
    // Crea la entidad a partir del DTO
    const vehiculo = this.vehiculoRepository.create(createVehiculoDto);
    // Guarda en la DB
    return await this.vehiculoRepository.save(vehiculo);
  }

  async findAll(): Promise<Vehiculo[]> {
    return await this.vehiculoRepository.find();
  }

  async obtenerUbicacionVehiculos() {
    return this.vehiculoRepository.find({
      select: ['patente', 'modelo', 'ubicacion'],
    });
  }

  async obtenerVehiculoPorPatente(patente: string) {
    const vehiculo = await this.vehiculoRepository.findOne({
      where: { patente },
    });
    if (!vehiculo) {
      throw new NotFoundException(
        `Vehículo con patente ${patente} no encontrado`,
      );
    }
    return vehiculo;
  }

  async actualizarUbicacion(patente: string, ubicacion: string) {
    const vehiculo = await this.vehiculoRepository.findOne({
      where: { patente },
    });
    if (!vehiculo) {
      throw new NotFoundException(
        `Vehículo con patente ${patente} no encontrado`,
      );
    }
    vehiculo.ubicacion = ubicacion;
    return this.vehiculoRepository.save(vehiculo);
  }

  async updateByPatente(
    patente: string,
    updateDto: UpdateVehiculoDto,
  ): Promise<Vehiculo> {
    const vehiculo = await this.vehiculoRepository.findOneBy({ patente });
    if (!vehiculo)
      throw new NotFoundException(
        `Vehiculo con patente ${patente} no encontrado`,
      );

    // Mergea los cambios (partial update)
    Object.assign(vehiculo, updateDto);

    return this.vehiculoRepository.save(vehiculo);
  }
}
