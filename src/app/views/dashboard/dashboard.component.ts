import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Message, Role, Ticket, TicketState } from 'src/app/models';
import { CategoryService, TicketService } from 'src/app/services';
import { TokenStorageService } from 'src/app/services/token-storage.service';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private chartsData: DashboardChartsData,
    private router: Router,
    private tokenStorageService: TokenStorageService,
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    ) {
  }

  public mainChart: IChartProps = {};
  public role: Role = -1;
  public userId: number = -1; 
  public condition: number = 0;

  ngOnInit(): void {
    this.role = this.tokenStorageService.getUser().role;
    this.userId = this.tokenStorageService.getUser().userId;
    switch(this.role){
      case Role.ADMIN:
        this.initCharts();
        break;
      case Role.USER:
        this.InitData();
        break;
      case Role.TECHSUPPORT:
        this.InitData();
        break;
    }
  }

  initCharts(): void {
    this.mainChart = this.chartsData.GetMainChart();
  }


  public newTicket: {
    theme: string;
    category: number;
    text: string;
  } = {
    theme: '',
    category: -1,
    text: '',
  }


  public myTickets: Ticket[] = [];
  public page: number = 1;
  public maxpage: number = 1;
  public selectedRow: number = -1;


  public ticketStates = [
    {id: -1, name: "Все"},
    {id: 0, name: "Закрыта"},
    {id: 1, name: "В работе"},
    {id: 2, name: "Ожидает ответа"},
    {id: 3, name: "Выполнена"},
    {id: 4, name: "Отменена"},
  ]

  public categoryOptions: Category[] = [];

  public buttons: number[]= [];
  public buttonspadding: number = 3;
  public elements: number = 18;
  public modal: boolean[] = [
    false
  ]


  InitData(){
    this.categoryService.getCategories().subscribe((data) => {this.categoryOptions = data});
    this.route.queryParams.subscribe(params => {
      this.page = parseInt(params["page"]) ?? 1;
      if(!this.page) this.page = 1;
      this.LoadPage();
    });
  }

  LoadPage(){
    switch(this.role){
      case Role.USER:
        this.ticketService.getByApplicant(this.page,this.elements,this.userId,TicketState.ANY).subscribe((data) => this.BindData(data));
        break;
      case Role.TECHSUPPORT:
        this.ticketService.getByWorker(this.page,this.elements,this.condition == 1 ? -1 : this.userId,this.condition == 1 ? TicketState.INWORK : TicketState.ANY).subscribe((data) => this.BindData(data));
        break;
    }
    
  }

  BindData(data: {count:number, rows:Ticket[]}) {
    this.myTickets = data.rows;
    this.maxpage = Math.ceil(data.count/this.elements);
    if(this.page > this.maxpage && this.maxpage > 0) {
      this.page = this.maxpage;
      this.LoadPage();
    } else {
      this.GeneratePageButtons();
    }

  } 

  GeneratePageButtons(){
    this.buttons = [];
    if(this.myTickets.length == 0) return;
    this.buttons.push(1);
    if(this.page - (1 + this.buttonspadding) > 1) this.buttons.push(-1);
    for(let i = Math.max(this.page-this.buttonspadding,2); i <= Math.min(this.page+this.buttonspadding,this.maxpage); i++){
      this.buttons.push(i);
    }
    if(this.page + (1 + this.buttonspadding) < this.maxpage) this.buttons.push(-1);
    if(this.page + this.buttonspadding < this.maxpage) this.buttons.push(this.maxpage);

  }

  SelectRow(event: any) {
    var target = event.target.parentElement;
    this.selectedRow = target.attributes.index.value;
  }

  GetColor(state: TicketState) : string{
    switch(state) {
      case TicketState.CANCELED || TicketState.CLOSED:
        return 'dark';
      case TicketState.COMPLETED:
        return 'success';
      case TicketState.WAITFORCONFRIMATION:
        return 'warning';
    }

    return "";
  }

  CheckState(state: TicketState){
    return state == TicketState.CANCELED || state == TicketState.CLOSED || state == TicketState.COMPLETED;
  }

  StateToName(state: TicketState) : string {
    let temp = this.ticketStates.find((tstate) => tstate.id == state);
    return temp != undefined ? temp.name : "";
  }

  ToggleModal(id: number){
    this.modal[id] = !this.modal[id];
  }

  CreateTicket(){
    let ticket: Ticket = {
      categoryId: Number(this.newTicket.category),
      theme: this.newTicket.theme,
    };
    let message: Message = {
      text: this.newTicket.text,
    };

    console.log(ticket);

    this.ticketService.create(ticket,message).subscribe({
      next: (data) => {
        this.router.navigate(['ticket/',data.id])
      },
      error: (err) => {
        console.log(err.error);
      }
    });

  }



}
