import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto'; // <-- precisa criar este DTO
import { PersonService } from '../person/person.service';
import { UserSessionService } from '../user-sesion/user-session.service';
import { Authority } from '../authority/entities/authority.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from '../person/entities/person.entity';
import { Credential } from '../credential/entities/credential.entity';

@Injectable()
export class AuthorityService {
  constructor(
    private readonly personService: PersonService,
    private readonly jwtService: JwtService,
    private readonly userSessionService: UserSessionService,
    @InjectRepository(Person)
    private readonly personRepo: Repository<Person>,
    @InjectRepository(Credential)
    private readonly credRepo: Repository<Credential>,
    @InjectRepository(Authority)
    private readonly authRepo: Repository<Authority>,
  ) { }

  async validateUser(email: string, pass: string) {
    const person = await this.personService.findByEmail(email);

    if (!person?.credential) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(pass, person.credential.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return person;
  }

  async login(loginDto: LoginDto) {
    const person = await this.validateUser(loginDto.email, loginDto.password);

    const payload = { sub: person.id, email: person.email, roles: person.authorities };
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    // corrigido: relacionar diretamente o Person
    await this.userSessionService.create({
      person: person,
      access_token: accessToken,
      refresh_token: refreshToken,
      login_date: new Date(),
    });


    return {
      accessToken,
      refreshToken,
      person: {
        id: person.id,
        name: person.name,
        email: person.email,
      },
    };
  }

  async register(registerDto: RegisterDto) {
    const existing = await this.personService.findByEmail(registerDto.email);
    if (existing) {
      throw new ConflictException('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    // Criar Person
    const person = this.personRepo.create({
      name: registerDto.name,
      email: registerDto.email,
    });
    await this.personRepo.save(person);

    // Criar Credential
    const credential = this.credRepo.create({
      person, // relacionamento OneToOne
      password: hashedPassword,
    });
    await this.credRepo.save(credential);

    // Criar Authority (se informado)
    if (registerDto.permission) {
      const authority = this.authRepo.create({
        person,
        permission: registerDto.permission,
      });
      await this.authRepo.save(authority);
    }

    return {
      message: 'User registered successfully',
      person: {
        id: person.id,
        name: person.name,
        email: person.email,
      },
    };
  }
}
