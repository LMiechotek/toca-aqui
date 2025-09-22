import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Person } from '../../person/entities/person.entity';

@Entity()
export class Credential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @OneToOne(() => Person, (person) => person.credential, { onDelete: 'CASCADE' })
  @JoinColumn()
  person: Person;
}
