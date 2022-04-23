

export class User {
  id?: number;
  login!: string;
  password?: string;
  firstName!: string;
  secondName!: string;
  role!: Role;
  isActive?: boolean;
  createdAt?: Date;
}


export enum Role {
  ADMIN = 1,
  TECHSUPPORT = 2,
  USER = 3
}