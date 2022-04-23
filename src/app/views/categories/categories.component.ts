import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AlertComponent } from '@coreui/angular';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { brandSet, flagSet, freeSet } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { CategoryService } from '../../services';

import { Category } from '../../models';
import { throttleTime } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: 'categories.component.html',
  styleUrls: [],
  providers: [IconSetService]
})
export class CategoriesComponent implements OnInit {
  constructor( private categoryService: CategoryService, private route: ActivatedRoute, private iconSet: IconSetService) {
    iconSet.icons = {...freeSet};
  }


  public tableData: Category[] = [];

  public modalVisible: boolean[] = [false,false];

  public options: any = {
    buttonspadding:3,
    elements:18,
  }

  public newCategory: Category = {
    name:""
  }

  public selectedRow: number = -1;
  public page: number = 1;
  public maxpage: number = 1;
  public buttons: number[]= [];


  
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
    this.categoryService.getAll(this.page, this.options.elements).subscribe((data) => {
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

  CreateCategory() {

    let category: Category = {
      name: this.newCategory.name,
    };

    this.categoryService.create(category).subscribe({
        next: data => {
          this.LoadPage();
          this.ToggleModal(0);
          this.newCategory.name = "";
        },
        error: err => {
          console.log(err.error);
        }
      }
    );

    
  }

  ChangeName(){
    this.categoryService.update(Number(this.tableData[this.selectedRow].id),this.newCategory.name).subscribe(
      {
        next: data => {
          this.LoadPage();
          this.ToggleModal(1);
          this.newCategory.name = "";
        },
        error: err => {
          console.log(err.error);
        }
      }
    );
  }


  ToggleModal(id: number){
    if(id == 1) {
      this.newCategory.name = this.tableData[this.selectedRow].name;
    }
    this.modalVisible[id] = !this.modalVisible[id];
  }


}