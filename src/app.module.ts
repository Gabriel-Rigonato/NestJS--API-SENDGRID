import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { sendgridModule } from './sendgrid/sendgrid.module';

@Module({
  imports: [ UserModule, sendgridModule]
})
export class AppModule { }