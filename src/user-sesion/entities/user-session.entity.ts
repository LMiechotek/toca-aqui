import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Person } from '../../person/entities/person.entity';

@Entity('user_session')
export class UserSession {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @ManyToOne(() => Person, (person) => person.sessions)
  @JoinColumn({ name: 'person_id' })
  person: Person;

  @Column({ type: 'varchar', nullable: true })
  ip_address?: string;

  @Column({ type: 'varchar', nullable: true })
  access_token?: string;

  @Column({ type: 'varchar', nullable: true })
  refresh_token?: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  login_date: Date;

  @Column({ type: 'timestamptz', nullable: true })
  logout_date?: Date;
}
