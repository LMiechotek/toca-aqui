import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Person } from '../../person/entities/person.entity';

@Entity()
export class UserSession {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Person, (person) => person.sessions, { onDelete: 'CASCADE' })
  @JoinColumn()
  person: Person;

  @Column()
  access_token: string;

  @Column()
  refresh_token: string;

  @Column({ type: 'timestamp' })
  login_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  logout_date: Date | null;   
}
