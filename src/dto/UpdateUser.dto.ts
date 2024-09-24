import { IsEmail, MinLength, IsNotEmpty, IsOptional } from 'class-validator';
import { EmailUnique } from 'src/validation/EmailUnique.validator';

export class UpdateUserDTO {
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsEmail()
  @EmailUnique({
    message: 'Email $value already exists. Choose another email.',
  })
  @IsOptional()
  email: string;

  @MinLength(6)
  @IsOptional()
  password: string;
}
