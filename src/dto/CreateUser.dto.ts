import { IsEmail, MinLength, IsNotEmpty } from 'class-validator';
import { EmailUnique } from 'src/validation/EmailUnique.validator';

export class CreateUserDTO {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @EmailUnique({
    message: 'Email $value already exists. Choose another email.',
  })
  email: string;

  @MinLength(6)
  password: string;
}
