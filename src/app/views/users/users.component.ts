import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AlertComponent } from '@coreui/angular';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { brandSet, flagSet, freeSet } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { UserService } from 'src/app/services';

import { User, TicketState, Role } from 'src/app/models';
import { throttleTime } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: 'users.component.html',
  styleUrls: [],
  providers: [IconSetService]
})
export class UsersComponent implements OnInit {
  constructor( private userService: UserService, private route: ActivatedRoute, private iconSet: IconSetService) {
    iconSet.icons = {...freeSet};
  }



  public tableData: User[] = [];
  public roles: string[] = [
    "",
    "Администратор",
    "Сотрудник тех. поддержки",
    "Пользователь",
  ];


  public modalVisible: boolean[] = [false,false,false,false,false,false];



  public options: any = {
    buttonspadding:3,
    elements:18,
  }

  public userCreate: User = {
    login:"",
    password:"",
    firstName:"",
    secondName:"",
    role:-1,
  }

  public _newPassword: string = "";
  public firstName: string = "";
  public secondName: string = "";

  public selectedRow: number = -1;
  public page: number = 1;
  public maxpage: number = 1;
  public buttons: number[]= [];

  public canDeactivate: boolean = false;
  public canActivate: boolean = false;


  
  ngOnInit(): void {
    this.InitData();
  }

  InitData(){
    this.route.params.subscribe(params => {
      this.page = parseInt(params["page"]) ?? 1;
      if(this.page < 1) this.page = 1;
      this.LoadPage();
    });

  }

  LoadPage(){
    this.userService.getAll(this.page, this.options.elements).subscribe((data) => {
      this.maxpage = Math.ceil(data.count/this.options.elements);
      this.tableData = data.rows;

      if(this.tableData.length == 0 && this.page > 1 ){
        this.page = this.maxpage;
        this.LoadPage();
      } else {
        this.selectedRow = -1;
        this.GeneratePageButtons();
      }
    });
  }

  GeneratePageButtons(){
    this.buttons = [];
    this.buttons.push(1);
    if(this.page - (1 + this.options.buttonspadding) > 1) this.buttons.push(-1);
    for(let i = Math.max(this.page-this.options.buttonspadding,2); i <= Math.min(this.page+this.options.buttonspadding,this.maxpage); i++){
      this.buttons.push(i);
    }
    if(this.page + (1 + this.options.buttonspadding) < this.maxpage) this.buttons.push(-1);
    if(this.page + this.options.buttonspadding < this.maxpage) this.buttons.push(this.maxpage);

  }

  SelectRow(event: any) {
    var target = event.target.parentElement;
    this.selectedRow = target.attributes.index.value;
  }

  CreateUser() {

    let user: User = {
      login:this.userCreate.login,
      password:this.userCreate.password,
      firstName: this.userCreate.firstName,
      secondName: this.userCreate.secondName,
      role: Number(this.userCreate.role),
    }

    this.userService.create(user).subscribe({
        next: data => {
          this.LoadPage();
          this.ToggleModal(0);
          this.userCreate = {
            login:"",
            password:"",
            firstName:"",
            secondName:"",
            role:-1,
          }
        },
        error: err => {
          console.log(err.error);
        }
      }
    );

    
  }

  DeactivateUser() {
    this.userService.deactivate(Number(this.tableData[this.selectedRow].id)).subscribe(
      {
        next: data => {
          this.LoadPage();
          this.ToggleModal(1);
        },
        error: err => {
          console.log(err.error);
        }
      }
    );
  }

  ActivateUser(){
    this.userService.activate(Number(this.tableData[this.selectedRow].id)).subscribe(
      {
        next: data => {
          this.LoadPage();
          this.ToggleModal(2);
        },
        error: err => {
          console.log(err.error);
        }
      }
    );
  }

  ChangePassword(){
    this.userService.changePassword(Number(this.tableData[this.selectedRow].id),this._newPassword).subscribe(
      {
        next: data => {
          this.ToggleModal(3);
          this._newPassword = "";
        },
        error: err => {
          console.log(err.error);
        }
      }
    );
  }

  ChangeName(){
    this.userService.update(Number(this.tableData[this.selectedRow].id),this.firstName,this.secondName).subscribe(
      {
        next: data => {
          this.LoadPage();
          this.ToggleModal(4);
          this.firstName = "";
          this.secondName = "";

        },
        error: err => {
          console.log(err.error);
        }
      }
    );
  }


  ToggleModal(id: number){
    if(id == 4) {
      this.firstName = this.tableData[this.selectedRow].firstName;
      this.secondName = this.tableData[this.selectedRow].secondName;
    }
    this.modalVisible[id] = !this.modalVisible[id];
  }


}