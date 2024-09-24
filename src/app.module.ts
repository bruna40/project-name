import { Module } from '@nestjs/common';
// import { config } from './ormconfig';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserController } from './controller/UserController';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
