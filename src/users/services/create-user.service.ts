import { Injectable } from '@nestjs/common';
import { PrismaClient, user } from '@prisma/client';
import IRequest from 'src/shared/interfaces/interface.controller';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async create({name, email, password} : IRequest): Promise<user> {
     
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
