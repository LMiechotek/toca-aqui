import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSession } from './entities/user-session.entity';

@Injectable()
export class UserSessionService {
  constructor(
    @InjectRepository(UserSession)
    private readonly sessionRepo: Repository<UserSession>,
  ) {}

  async create(data: Partial<UserSession>) {
    const session = this.sessionRepo.create(data);
    return this.sessionRepo.save(session);
  }

  async logout(sessionId: number) {
    return this.sessionRepo.update(sessionId, { logout_date: new Date() });
  }
}