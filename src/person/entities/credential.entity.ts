import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Person } from '../../person/entities/person.entity';

@Entity('credential')
export class Credential {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 60 })
  password: string;

  @OneToOne(() => Person, (person) => person.credential)
  @JoinColumn({ name: 'person_id' })
  person: Person;
}
