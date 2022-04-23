import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/utils/src';

export interface ITicketContent {
  ticketTheme: string;
  ticketCategory: string;
  ticketApplicant: string;
  ticketWorker: string;
  ticketStatus: string;
}


@Injectable({
  providedIn: 'any'
})
export class TicketsTableData {
  constructor() {
    this.initTableData();
  }


  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  initTableData() {

    const randomTheme = [
      "Исправление ошибки",
      "Добавить отчет",
      "Изменить отчет",
      "Исправить ошибку",
      "Проконсультировать по работе операции",
      "Изменить функционал",
      "Добавить операцию",
      "Изменить операцию"
    ];

    const randomCategory = [
      "Добавление/изменение функционала",
      "Консультация по работе программы"
    ];

    const randomApplicant = [
      "Костюк Ольга Николаевна",
      "Иванова Елена Альбертовна",
      "Власова Анастасия Олеговна",
      "Карманова Татьяна Владимировна",
      "Филиппова Елена Михайловна"
    ];
    const randomWorker = [
      "",
      "Костюк Александр Борисович",
    ];
    const randomStatus = [
      "В работе",
      "Ожидает ответа",
      "Выполнена",
      "Закрыта"
    ];






    // generate random values for mainChart
    for (let i = 0; i <= 10; i++) {
      let ticket : ITicketContent = {
        ticketTheme: randomTheme[this.random(0,randomTheme.length-1)],
        ticketCategory: randomCategory[this.random(0,randomCategory.length-1)],
        ticketApplicant: randomApplicant[this.random(0,randomApplicant.length-1)],
        ticketWorker: randomWorker[this.random(0,randomWorker.length-1)],
        ticketStatus: randomStatus[this.random(0,randomStatus.length-1)],
      }
      if(ticket.ticketStatus == "Выполнена" || ticket.ticketStatus == "Закрыта"){
        if(ticket.ticketStatus == "Выполнена"){
          ticket.ticketWorker = randomWorker[1];
        }
      }
      switch(ticket.ticketStatus){
        case "Выполнена":
          ticket.ticketWorker = randomWorker[1];
          break;
        case "Закрыта":
          break;
      }
    }
  }
}
