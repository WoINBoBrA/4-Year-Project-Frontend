import { Category } from "./category.model";
import { Message } from "./message.model";
import { User } from "./user.model";

export class Ticket {
  id?: number;
  theme!: string;
  categoryId!: number;
  workerId?: number | null;
  applicantId?: number;
  category?: Category;
  states?: TicketStatus[];
  worker?: User | null;
  applicant?: User;
  messages?: Message[];
  createdAt?: string;
}

export class TicketStatus {
  state!: TicketState;
  createdAt!: string;
}




export enum TicketState {
  ANY = -1,
  CLOSED = 0,
  INWORK = 1,
  WAITFORCONFRIMATION = 2,
  COMPLETED = 3,
  CANCELED = 4,
}