import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbConfigModule } from 'src/config/db-config.module';
import { PersonModule } from 'src/person/person.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DbConfigModule,
    PersonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}