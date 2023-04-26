import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from 'src/users/services/create-user.service';
import { SendGridModule } from '@anchan828/nest-sendgrid';


@Module({
    controllers: [UserController],
    providers: [UserService],
    exports: [
      UserService
    ]
  })
  export class UserModule { }