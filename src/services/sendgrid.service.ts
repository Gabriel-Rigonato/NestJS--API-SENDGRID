import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { SendGridService } from '@anchan828/nest-sendgrid/dist/sendgrid.service';


interface IRequest {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export default class AppService {

    constructor( private readonly sendGrid: SendGridService) {}

    //Verify email for send a new message.
    async root(email: string, name: string): Promise<void> {
        await this.sendGrid.send({
          to: email,
          from: process.env.FROM_EMAIL,
          subject: "Aqui é o teste final",
          text: "Teste de email",
          html: "<strong> `Hello Dev, Api terceirizada chegou ! ;D </strong>",
        });
      }
    } 