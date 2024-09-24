export class ListUserDTO {
  constructor(
    readonly name: string,
    readonly id: string,
    readonly deletedAt: Date | null,
  ) {}
}
