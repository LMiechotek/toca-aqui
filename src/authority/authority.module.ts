import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthorityService } from './authority.service';
import { JwtStrategy } from './jwt.strategy';
import { PersonModule } from '../person/person.module';
import { UserSessionModule } from 'src/user-sesion/user-session.module';

@Module({
  imports: [
    PersonModule,
    UserSessionModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secretKey',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthorityService, JwtStrategy],
  controllers: [],
})
export class AuthModule {}