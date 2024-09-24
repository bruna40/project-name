import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserRepository } from '../Repository/UserRepository';
import { CreateUserDTO } from 'src/dto/CreateUser.dto';

@Controller('/user')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() dataUser: CreateUserDTO) {
    this.userRepository.saveUser(dataUser);
    return dataUser;
  }

  @Get()
  async getAllUsers() {
    return this.userRepository.listerUsers();
  }
}
