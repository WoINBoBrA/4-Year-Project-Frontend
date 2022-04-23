import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common'; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService, TicketService, TokenStorageService, UserService } from 'src/app/services';
import { ThisReceiver } from '@angular/compiler';
import { Category, Message, Role, Ticket, TicketState, User } from 'src/app/models';


interface IMessage {
  userName: string,
  text: string,
  datetime: Date,
  position: string,
}

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private ticketService: TicketService, private categoryService: CategoryService, private tokenStorageService: TokenStorageService) { }
  
  public ticketId = -1;

  public modal: boolean[] = [
    false,
    false,
    false,
    false,
  ]

  public ticket: Ticket = {
    id: 1,
    theme: "",
    categoryId: 0,
    applicantId:0,
    workerId: 0,
    states:[
      {
        state: TicketState.INWORK,
        createdAt: ""
      }
    ],
    messages: []
  };

  public ticketStates = [
    "Закрыта",
    "В работе",
    "Ожидает ответа",
    "Выполнена",
    "Отменена",
  ]

  public categoryOptions: Category[] = [];

  public workerOptions: User[] = [];

  public user: {
    role: Role;
    userId: number;
  } = {
    role: -1,
    userId: -1,
  }


  public selected : {
    state: TicketState,
    category: number,
    worker?: number | null,
  } = {
    state: this.ticket.states![0].state,
    category: this.ticket.categoryId,
    worker: this.ticket.workerId,
  }

  public newMessageContent: string = "";


  public confirm: {
    name: string;
    method: () => void;
  } = {
    name: "",
    method: ()=>{},
  }

  public confirmArr: {
    name: string;
    method: () => void;
  }[] = [
    {name:'Отмена заявки',method: () => this.CancelTicket()},
    {name:'Подтверждение заявки',method: () => this.ConfirmTicket()},
    {name:'Отклонение заявки',method: () => this.RejectTicket()},
    {name:'Направление заявки на подтверждение',method: () => this.CompleteTicket()},
    {name:'Принятие в работу',method: () => this.TakeInWork()},
  ]



  ngOnInit(): void {

    let user = this.tokenStorageService.getUser();
    this.user.role = user.role;
    this.user.userId = user.userId;

    if(this.user.role == 1){
      this.userService.getByRole(Role.TECHSUPPORT).subscribe((data) => {this.workerOptions = data});
      this.categoryService.getCategories().subscribe((data) => {this.categoryOptions = data});
    } 

    this.route.params.subscribe((params) => {
      this.ticketId = params['id'];
      if(this.ticketId == -1) this.router.navigate(['/tickets',1]);
      this.LoadTicket();
    });
  }

  /* -------------------------------------------------------------
                          COMMON METHODS
  ---------------------------------------------------------------- */


  AddMessage(){
    this.ticketService.createMessage(this.ticketId, {text:this.newMessageContent}).subscribe({
      next: (data) => {
        this.ticket = data;
        this.ToggleModal(2);
      },
      error: (err) => {
        console.log(err.error);
      }
    });
  }


  /* -------------------------------------------------------------
                           USER METHODS
  ---------------------------------------------------------------- */

  CancelTicket(){
    this.ticketService.cancel(this.ticketId).subscribe({
      next: (data) => {
        this.ticket = data;
        this.ToggleModal(4);
        this.confirm = {name:'',method:()=>{}};
      },
      error: (err) => {
        console.log(err.error);
      }
    })
  }

  RejectTicket(){
    this.ticketService.reject(this.ticketId).subscribe({
      next: (data) => {
        this.ticket = data;
        this.ToggleModal(4);
        this.confirm = {name:'',method:()=>{}};
      },
      error: (err) => {
        console.log(err.error);
      }
    })
  }

  ConfirmTicket(){
    this.ticketService.confirm(this.ticketId).subscribe({
      next: (data) => {
        this.ticket = data;
        this.ToggleModal(4);
        this.confirm = {name:'',method:()=>{}};
      },
      error: (err) => {
        console.log(err.error);
      }
    })
  }


  /* -------------------------------------------------------------
                           SUPPORT METHODS
  ---------------------------------------------------------------- */

  CompleteTicket(){
    this.ticketService.complete(this.ticketId).subscribe({
      next: (data) => {
        this.ticket = data;
        this.ToggleModal(4);
        this.confirm = {name:'',method:()=>{}};
      },
      error: (err) => {
        console.log(err.error);
      }
    })
  }

  TakeInWork(){
    this.ticketService.assign(this.ticketId,this.user.userId).subscribe({
      next: (data) => {
        this.ticket = data;
        this.ToggleModal(4);
        this.confirm = {name:'',method:()=>{}};
      },
      error: (err) => {
        console.log(err.error);
      }
    })
  }


  /* -------------------------------------------------------------
                           ADMIN METHODS
  ---------------------------------------------------------------- */

  ChangeState(){
    this.ticketService.changeState(this.ticketId,Number(this.selected.state)).subscribe({
      next: (data) => {
        this.ticket = data;
        this.ToggleModal(0);
      },
      error: (err) => {
        console.log(err.error);
      }
    });
  }

  ChangeCategory(){
    this.ticketService.changeCategory(this.ticketId,Number(this.selected.category)).subscribe({
      next: (data) => {
        this.ticket = data;
        this.ToggleModal(1);
      },
      error: (err) => {
        console.log(err.error);
      }
    });
  }


  ChangeWorker(){
    this.ticketService.assign(this.ticketId, Number(this.selected.worker)).subscribe({
      next: (data) => {
        this.ticket = data;
        this.ToggleModal(3);
      },
      error: (err) => {
        console.log(err.error);
      }
    });
  }
  

  /* -------------------------------------------------------------
                          MAIN INFO METHODS
  ---------------------------------------------------------------- */

  LoadTicket(){
    this.ticketService.getOne(this.ticketId).subscribe((data) => {
      this.ticket = data;
    });
  }

  GetStateName(){
    return this.ticketStates[this.ticket.states![0].state];
  }

  ToggleModal(id: number){
    this.modal[id] = !this.modal[id];
  }

  ConfirmModal(id:number){
    this.confirm= this.confirmArr[id];
    this.modal[4] = !this.modal[4];
  }


}
