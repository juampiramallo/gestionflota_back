import { Column } from 'typeorm';

export class Gomas {
  @Column()
  marca: string;

  @Column()
  tamaño: string;

  @Column()
  detalle: string;
}
