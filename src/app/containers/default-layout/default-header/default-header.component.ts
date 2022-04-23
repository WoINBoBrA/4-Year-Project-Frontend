import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { freeSet } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { Role } from 'src/app/models';
import { UserService } from 'src/app/services';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public user: {
    firstName: string;
    secondName: string;
    role: Role;
  } = {
    firstName: "",
    secondName: "",
    role: -1,
  }


  @Output() toggleModal: EventEmitter<any> = new EventEmitter();

  constructor(private userService: UserService,private classToggler: ClassToggleService, private tokenStorageService: TokenStorageService, private router : Router, private iconSet: IconSetService,) {
    super();
    iconSet.icons = {...freeSet};
  }

  ngOnInit(){
    let userInfo = this.tokenStorageService.getUser();
    this.user.firstName = userInfo.firstName;
    this.user.secondName = userInfo.secondName;
    this.user.role = userInfo.role;
  }

  
  LogOut(){
    this.tokenStorageService.signOut();
    this.router.navigate(["/login"]);
  }

  ToggleModal(){
    this.toggleModal.emit();
  }


}
