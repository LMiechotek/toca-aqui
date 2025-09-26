import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from 'typeorm';
import { Credential } from '../../credential/entities/credential.entity';
import { Authority } from '../../authority/entities/authority.entity';
import { UserSession } from '../../user-session/entities/user-session.entity'; // 👈 importa aqui

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @OneToOne(() => Credential, (credential) => credential.person)
  credential: Credential;

  @OneToMany(() => Authority, (authority) => authority.person)
  authorities: Authority[];

  @OneToMany(() => UserSession, (session) => session.person, { cascade: true }) // 👈 adiciona isso
  sessions: UserSession[];
}
