import { Column } from 'typeorm';

export class Bateria {
  @Column()
  modelo: string;

  @Column({ nullable: true })
  foto: string;
}
