import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: []
})
export class TableComponent implements OnInit {

  constructor() { }

  public title: string = "Users";
  public columns: string[] = [];
  public content: string[] = [];

  ngOnInit(): void {

  }

  InitUserTable(){

  }

  InitTicketTable(){
    
  }



}
