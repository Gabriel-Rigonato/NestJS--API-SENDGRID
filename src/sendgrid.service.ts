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

    async root(email: string, name: string): Promise<void> {
        await this.sendGrid.send({
          to: email,
          from: process.env.FROM_EMAIL,
          subject: "Aqui é o teste final",
          text: "Mostrando um email de qualidade que chegou através da API sendGrid para o neto da vovó sensei",
          html: "<strong>and easy to do anywhere, even with Node.js</strong>",
        });
      }
    } 