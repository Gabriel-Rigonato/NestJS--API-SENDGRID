import { Injectable } from '@nestjs/common';
import { SendGridService } from '@anchan828/nest-sendgrid/dist/sendgrid.service';


@Injectable()
export class SendgridService {

    constructor( private readonly sendGrid: SendGridService) {}
    
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
