import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserRepository } from '../Repository/UserRepository';
import { CreateUserDTO } from 'src/dto/CreateUser.dto';
import { UserEntity } from 'src/Entity/User.entity';
import { v4 as uuid } from 'uuid';
import { ListUserDTO } from 'src/dto/ListUser.dto';

@Controller('/user')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() dataUser: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.id = uuid();
    userEntity.name = dataUser.name;
    userEntity.email = dataUser.email;
    userEntity.password = dataUser.password;

    this.userRepository.saveUser(userEntity);
    return { id: userEntity.id, message: 'User created successfully' };
  }

  @Get()
  async getAllUsers() {
    const userSave = await this.userRepository.listerUsers();
    const userList = userSave.map(
      (user) => new ListUserDTO(user.id, user.name),
    );
    return userList;
  }
}
