import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Role, Ticket, TicketState, User } from 'src/app/models';
import { TicketService, UserService } from 'src/app/services';
import { isJSDocThisTag } from 'typescript/lib/tsserverlibrary';

@Component({
  templateUrl: 'tickets.component.html',
  styleUrls: ['tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  constructor( private route: ActivatedRoute,  private ticketService: TicketService, private userService: UserService) {
  }

  public tableData: Ticket[] = [];
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

  public searchConditions = [
    "Все",
    "По заявителю и статусу",
    "По исполнителю и статусу",
    "По статусу"
  ]


  public buttons: number[]= [];
  public buttonspadding: number = 3;
  public elements: number = 18;

  public condition: {selected:SearchCondition, current:SearchCondition, variables: number[]} = {
    selected: SearchCondition.ALL,
    current: SearchCondition.ALL,
    variables: [

    ]
  }

  public applicants: User[] = [];
  public workers: User[] = [];


  public selected: {
    applicant: number,
    worker: number,
    state: TicketState,
  } = {
    applicant: -1,
    worker: -1,
    state: TicketState.ANY
  }


  ngOnInit(): void {
    this.InitData();
  }

  InitData(){

    this.userService.getByRole(Role.TECHSUPPORT).subscribe((data) => {
      this.workers = data;
    });

    this.userService.getByRole(Role.USER).subscribe((data) => {
      this.applicants = data;
    });


    this.route.params.subscribe(params => {
      this.page = parseInt(params["page"]) ?? 1;
      if(this.page < 0) this.page = 1;
      this.LoadPage();
    });
  }

  LoadPage(){
    
    switch(this.condition.current){
      case SearchCondition.ALL:
        this.ticketService.getAll(this.page,this.elements).subscribe((data) => this.BindData(data));
        break;
      case SearchCondition.APPLICANT:
        this.ticketService.getByApplicant(this.page,this.elements,this.condition.variables[0],this.condition.variables[1]).subscribe((data) => this.BindData(data));
        break;
      case SearchCondition.WORKER:
        this.ticketService.getByWorker(this.page,this.elements,this.condition.variables[0],this.condition.variables[1]).subscribe((data) => this.BindData(data));
        break;
      case SearchCondition.STATE:
        this.ticketService.getByState(this.page,this.elements,this.condition.variables[0]).subscribe((data) => this.BindData(data));
    }
  }

  BindData(data: {count:number, rows:Ticket[]}) {
    this.tableData = data.rows;
    this.maxpage = Math.ceil(data.count/this.elements);
    if(this.page > this.maxpage && this.maxpage > 0) {
      this.page = this.maxpage;
      this.LoadPage();
    } else {
      this.GeneratePageButtons();
    }

  } 

  ChangeSearchCondition(){
    this.page = 1;

    this.condition.current = Number(this.condition.selected);
    switch(this.condition.current) {
      case SearchCondition.ALL:
        this.condition.variables = [];
        break;
      case SearchCondition.APPLICANT:
        this.condition.variables = [Number(this.selected.applicant),Number(this.selected.state)];
        break;
      case SearchCondition.WORKER:
        this.condition.variables = [Number(this.selected.worker),Number(this.selected.state)];
        break;
      case SearchCondition.STATE:
        this.condition.variables = [Number(this.selected.state)];
        break;
    }
    this.LoadPage();
  }

  GeneratePageButtons(){
    this.buttons = [];
    if(this.tableData.length == 0) return;
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

}

enum SearchCondition {
  ALL = 0,
  APPLICANT = 1,
  WORKER = 2,
  STATE = 3,
}
