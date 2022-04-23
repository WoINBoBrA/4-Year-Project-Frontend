import { Injectable } from '@angular/core';
import { TICKET_SERVICE } from '../constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message, Ticket, TicketState } from '../models';
import { Observable } from 'rxjs';
import { NumberSymbol } from '@angular/common';

const TICKET_API = 'http://woinbobra.xyz:3000/tickets/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private http : HttpClient) { }

  getAll(page: number, elements: number) : Observable<{count:number, rows:Ticket[]}> {
    return this.http.get<{count:number, rows:Ticket[]}>(TICKET_API + `config/page${page}/elements${elements}`,httpOptions);
  }

  getOne(id: number) : Observable<Ticket> {
    return this.http.get<Ticket>(TICKET_API+`${id}`,httpOptions);
  }

  getByWorker(page: number, elements: number, worker: number, state: TicketState) : Observable<{count:number, rows:Ticket[]}> {
    return this.http.get<{count:number, rows:Ticket[]}>(TICKET_API + `worker${worker}/state${state}/config/page${page}/elements${elements}`,httpOptions);
  }

  getByApplicant(page: number, elements: number, applicant: number, state: TicketState) : Observable<{count:number, rows:Ticket[]}> {
    return this.http.get<{count:number, rows:Ticket[]}>(TICKET_API + `applicant${applicant}/state${state}/config/page${page}/elements${elements}`,httpOptions);
  }

  getByState(page: number, elements: number, state: TicketState) : Observable<{count:number, rows:Ticket[]}> {
    return this.http.get<{count:number, rows:Ticket[]}>(TICKET_API + `state${state}/config/page${page}/elements${elements}`,httpOptions);
  }

  create(ticket: Ticket, message: Message) : Observable<Ticket> {
    return this.http.post<Ticket>(TICKET_API, {ticket:ticket, message:message},httpOptions);
  }

  createMessage(id: number, message: Message) : Observable<Ticket> {
    return this.http.post<Ticket>(TICKET_API + `message/${id}`, message, httpOptions);
  }

  cancel(id: number) : Observable<Ticket> {
    return this.http.patch<Ticket>(TICKET_API + `cancel/${id}`, {}, httpOptions);
  }

  confirm(id: number) : Observable<Ticket> {
    return this.http.patch<Ticket>(TICKET_API + `confirm/${id}`, {}, httpOptions);
  }

  reject(id: number) : Observable<Ticket> {
    return this.http.patch<Ticket>(TICKET_API + `reject/${id}`, {}, httpOptions);
  }
  
  close(id: number) : Observable<Ticket> {
    return this.http.patch<Ticket>(TICKET_API + `close/${id}`, {}, httpOptions);
  }
  
  complete(id: number) : Observable<Ticket> {
    return this.http.patch<Ticket>(TICKET_API + `complete/${id}`, {}, httpOptions);
  }
  
  changeState(id: number, state: TicketState ) : Observable<Ticket> {
    return this.http.patch<Ticket>(TICKET_API + `${id}/state${state}`, {}, httpOptions);
  }

  changeCategory(id: number, categoryId: number) : Observable<Ticket> {
    return this.http.patch<Ticket>(TICKET_API + `${id}/category${categoryId}`,{},httpOptions);
  }

  assign(id: number, worker: number | null) : Observable<Ticket> {
    return this.http.patch<Ticket>(TICKET_API + `assign/${id}`, {userId:worker}, httpOptions);
  }



}

export const TicketServiceProviders = [
  {provide:TICKET_SERVICE, useValue: TicketService}
];