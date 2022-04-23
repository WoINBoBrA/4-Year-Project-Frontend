import { Component, OnInit } from '@angular/core';
import { BreadcrumbModule, INavData } from '@coreui/angular';
import { Role } from 'src/app/models';
import { TokenStorageService, UserService } from 'src/app/services';

import { adminItems, userItems, supportItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit {

  public navItems: INavData[] = [];

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  public brand = {
    src: 'assets/img/brand/sidebar-logo.svg',
    width: 190,
    height: 35,
    alt: 'Application Logo'
  };

  constructor(private userService: UserService, private tokenStorageService: TokenStorageService) {}

  public oldPassword: string = "";
  public newPassword: string = "";

  public passwordChangeModal: boolean = false;

  public role: Role = -1;


  ngOnInit(){
    this.role = this.tokenStorageService.getUser().role;


    switch(this.role){
      case Role.ADMIN:
        this.navItems = adminItems;
        break;
      case Role.TECHSUPPORT:
        this.navItems = supportItems;
        break;
      case Role.USER:
        this.navItems = userItems;
        break;
    }
  }

  
  ToggleModal(){
    this.passwordChangeModal = !this.passwordChangeModal;
  }

  ChangePassword(){
    this.userService.selfChangePassword(this.oldPassword,this.newPassword).subscribe({
      next: (data) => {
        this.ToggleModal();
        this.newPassword = "";
        this.oldPassword = "";
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


}
