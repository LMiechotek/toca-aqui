import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Person } from '../../person/entities/person.entity';

@Entity('authority')
export class Authority {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ type: 'varchar' })
  permission: string; // admin | teacher

  @ManyToOne(() => Person, (person) => person.authorities)
  @JoinColumn({ name: 'person_id' })
  person: Person;
}
