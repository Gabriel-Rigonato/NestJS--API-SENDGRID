import IRequest from "src/shared/interfaces/interface.controller";
import { Body, Controller, Post } from '@nestjs/common';
import { SendgridService } from "../services/sendgrid.service";

@Controller('controller')
export class SendgridController {
  constructor(private readonly SendgridService: SendgridService) { }

  @Post('sendgrid')
  async sendEmail(@Body() IRequest: IRequest): Promise<void> {
    
    const { name, email } = IRequest;
          
    await this.SendgridService.root(email, name);
  }
}
