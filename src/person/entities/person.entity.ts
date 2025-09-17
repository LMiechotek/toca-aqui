import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from 'typeorm';
import { Credential } from '../../credential/entities/credential.entity';
import { UserSession } from '../../user-session/entities/user-session.entity';
import { Authority } from '../../authority/entities/authority.entity';

@Entity('person')
export class Person {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 13, nullable: true })
  mobile_number?: string;

  @Column({ length: 11, nullable: true })
  cpf?: string;

  // relações
  @OneToOne(() => Credential, (cred) => cred.person, { cascade: true })
  credential: Credential;

  @OneToMany(() => UserSession, (session) => session.person)
  sessions: UserSession[];

  @OneToMany(() => Authority, (auth) => auth.person)
  authorities: Authority[];
}
