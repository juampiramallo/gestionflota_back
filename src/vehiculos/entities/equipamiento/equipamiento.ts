import { Column } from 'typeorm';

export class Equipamiento {
  @Column()
  gato: string;

  @Column()
  llave: string;

  @Column()
  antirrobo: string;
}
