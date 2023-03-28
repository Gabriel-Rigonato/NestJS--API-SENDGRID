import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { response } from 'express';
import { AppService as CreateService } from './app.service';
import IRequest from './interface.controller';
import { PrismaClient } from '@prisma/client';
import { SendGridService } from '@anchan828/nest-sendgrid/dist/sendgrid.service';
import AppService from './sendgrid.service';

const prisma = new PrismaClient();

@Controller('teste')
export class AppController {
  constructor(private readonly createService: CreateService,
    private readonly appService: AppService) { }

  @Post()
  async getHello(@Body() IRequest: IRequest): Promise<any> {


    const { name, email, password } = IRequest;

    const user = await this.createService.create({ name, email, password });

    return user;
  }


  @Post('sendgrid')
  async sendEmail(@Body() IRequest: IRequest): Promise<void> {
    
    const { name, email } = IRequest;

    await this.appService.root(email, name)
  }
}
