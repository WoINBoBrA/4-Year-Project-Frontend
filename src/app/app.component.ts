import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
declare let gtag: Function;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'Служба технической поддержки';

  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService
  ) {
    titleService.setTitle(this.title);
    // iconSet singleton
    iconSetService.icons = { ...iconSubset };
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) 
      return;
      gtag('config', 'G-EHESJNH6ZM',
        {
            page_path: evt.urlAfterRedirects
        }
      );
    });
  }

}
