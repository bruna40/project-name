import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/Entity/User.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async saveUser(user: UserEntity) {
    this.users.push(user);
  }

  async listerUsers() {
    return this.users;
  }

  async getUserByEmail(email: string) {
    return this.users.find((user) => user.email === email) || null;
  }
}
