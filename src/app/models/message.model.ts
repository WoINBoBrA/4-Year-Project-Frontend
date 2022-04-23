export class Message{
  id?: number;
  text!: string;
  createdAt?: Date;
  userId?: number;
  user?: {
    firstName: string;
    secondName: string;
  }
}