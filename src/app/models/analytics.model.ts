import { TicketState} from './ticket.model';

export class MonthStatistic {
  month!: string;
  ticketCount!: number;
}

export class DayStatistic {
  date!: string;
  ticketCount!: number;
}