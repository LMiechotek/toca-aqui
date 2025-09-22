import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from 'typeorm';
import { Credential } from '../../credential/entities/credential.entity';
import { UserSession } from '../../user-sesion/entities/user-session.entity';
import { Authority } from '../../authority/entities/authority.entity';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @OneToOne(() => Credential, (cred) => cred.person, { cascade: true })
  credential: Credential;

  @OneToMany(() => UserSession, (session) => session.person)
  sessions: UserSession[];

  @OneToMany(() => Authority, (auth) => auth.person)
  authorities: Authority[];
}
