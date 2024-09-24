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

  async findUserById(id: string, dataUserUpdate: Partial<UserEntity>) {
    const user = this.users.find((user) => user.id === id) || null;

    if (!user) {
      throw new Error('User not found');
    }

    Object.entries(dataUserUpdate).forEach(([key, value]) => {
      if (key !== 'id') {
        user[key] = value;
      }

      return user;
    });
  }

  async softDelete(id: string) {
    const user = this.users.find((user) => user.id === id) || null;

    if (!user) {
      throw new Error('User not found');
    }

    user.deletedAt = new Date();

    return user;
  }
}
