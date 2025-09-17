import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from '../person/person.module';
import { ConfigModule } from '@nestjs/config';
import { DbConfigModule } from 'src/config/db-config.module';


@Module({
  imports: [PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
