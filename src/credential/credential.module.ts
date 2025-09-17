import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CredentialController } from './credential.controller';
import { credentialService } from './credential.service';

@Module({
  imports: [TypeOrmModule.forFeature([Credential])],
  controllers: [CredentialController],
  providers: [credentialService],
  exports: [credentialService],
})
export class CredentialModule {}
