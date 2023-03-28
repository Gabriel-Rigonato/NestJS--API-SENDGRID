import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class AppService {
  async create({name, email, password} : IRequest): Promise<any> {
     
     const user = await prisma.user.create({
      data:{
        name: name,
        email: email,
        password: password
      }
     })
     return user;
  }
}
