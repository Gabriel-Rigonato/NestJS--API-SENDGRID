import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/create-user.service';
import IRequest from '../../shared/interfaces/interface.controller';

@Controller('controller')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async createUser(@Body() IRequest: IRequest): Promise<any> {


    const { name, email, password } = IRequest;

    const user = await this.userService.create({ name, email, password });

    return user;
  }
}
