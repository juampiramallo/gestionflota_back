import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Papeles } from './papeles/papeles';
import { Bateria } from './bateria/bateria';
import { Gomas } from './gomas/gomas';
import { Equipamiento } from './equipamiento/equipamiento';

@Entity()
export class Vehiculo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  patente: string;

  @Column()
  color: string;

  @Column()
  modelo: string;

  @Column()
  anio: number;

  @Column()
  ubicacion: string;

  @Column(() => Papeles)
  papeles: Papeles;

  @Column(() => Bateria)
  bateria: Bateria;

  @Column(() => Gomas)
  gomas: Gomas;

  @Column(() => Equipamiento)
  equipamiento: Equipamiento;
}
