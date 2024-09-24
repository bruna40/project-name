import { Module } from '@nestjs/common';
import { UserController } from 'src/controller/UserController';
import { UserRepository } from 'src/Repository/UserRepository';
import { IsUniqueEmail } from 'src/validation/EmailUnique.validator';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepository, IsUniqueEmail],
})
export class UserModule {}
