import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users = [];

  async saveUser(user) {
    this.users.push(user);
  }

  async listerUsers() {
    return this.users;
  }

  async getUserByEmail(email: string) {
    return this.users.find((user) => user.email === email) || null;
  }
}
