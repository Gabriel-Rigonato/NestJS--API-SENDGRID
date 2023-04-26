import { SendGridModule } from '@anchan828/nest-sendgrid';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SendgridController } from './controllers/sendgrid.controller';
import { SendgridService } from './services/sendgrid.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SendGridModule.forRoot({
      apikey: process.env.SENDGRID_API_KEY
    })
  ],
  controllers: [SendgridController],
  providers: [SendgridService],

  exports: [SendgridService]
})
export class sendgridModule { }
