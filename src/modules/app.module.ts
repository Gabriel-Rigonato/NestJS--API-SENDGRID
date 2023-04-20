import { SendGridModule } from '@anchan828/nest-sendgrid';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from '../controllers/app.controller';
import { AppService as CreateService } from '../services/app.service';
import AppService from '../services/sendgrid.service';

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
