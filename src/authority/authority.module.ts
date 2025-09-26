import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorityService } from './authority.service';
import { AuthController } from './authority.controller';
import { PersonModule } from 'src/person/person.module';
import { Credential } from 'src/credential/entities/credential.entity';
import { Authority } from './entities/authority.entity';
import { UserSessionModule } from 'src/user-session/user-session.module';

@Module({
  imports: [
    PersonModule, 
    UserSessionModule,
    TypeOrmModule.forFeature([Credential, Authority]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secretKey',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthorityService],
  controllers: [AuthController],
})
export class AuthModule {}
