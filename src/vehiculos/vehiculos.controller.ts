import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateUbicacionDto } from './dto/update-ubicacion.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';

@Controller('vehiculos')
export class VehiculosController {
  constructor(private readonly vehiculosService: VehiculosService) {}

  @Post()
  create(@Body() createVehiculoDto: CreateVehiculoDto) {
    return this.vehiculosService.create(createVehiculoDto);
  }

  @Get()
  findAll() {
    return this.vehiculosService.findAll();
  }

  @Get('ubicaciones')
  async getUbicaciones() {
    return this.vehiculosService.obtenerUbicacionVehiculos();
  }

  @Get(':patente')
  async getVehiculoPorPatente(@Param('patente') patente: string) {
    return this.vehiculosService.obtenerVehiculoPorPatente(patente);
  }

  @Patch(':patente/ubicacion')
  async actualizarUbicacion(
    @Param('patente') patente: string,
    @Body() updateUbicacionDto: UpdateUbicacionDto,
  ) {
    return this.vehiculosService.actualizarUbicacion(
      patente,
      updateUbicacionDto.ubicacion,
    );
  }

  @Patch(':patente')
  update(
    @Param('patente') patente: string,
    @Body() updateVehiculoDto: UpdateVehiculoDto,
  ) {
    return this.vehiculosService.updateByPatente(patente, updateVehiculoDto);
  }
}
