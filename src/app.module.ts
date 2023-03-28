import { SendGridModule } from '@anchan828/nest-sendgrid';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService as CreateService } from './app.service';
import AppService from './sendgrid.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SendGridModule.forRoot({
      apikey: process.env.SENDGRID_API_KEY})
  ],
  controllers: [AppController],
  providers: [CreateService, AppService],
})
export class AppModule { }
