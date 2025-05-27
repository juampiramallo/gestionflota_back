import { Column } from 'typeorm';

export class Papeles {
  @Column()
  seguro: string;

  @Column()
  cedulaVerde: string;

  @Column()
  cedulaAzul: string;

  @Column()
  permisoManejo: string;
}
