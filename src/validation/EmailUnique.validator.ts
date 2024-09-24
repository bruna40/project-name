import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserRepository } from 'src/Repository/UserRepository';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsUniqueEmail implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(email: string) {
    const user = await this.userRepository.getUserByEmail(email);
    return !user;
  }
}
export const EmailUnique = (options: ValidationOptions) => {
  return (object: object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: options,
      constraints: [],
      validator: IsUniqueEmail,
    });
  };
};
