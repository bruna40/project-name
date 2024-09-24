export class UserEntity {
  id: string;
  name: string;
  email: string;
  password: string;

  deletedAt: Date | null = null;
}
