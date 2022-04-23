import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketsComponent } from './tickets.component';

const routes: Routes = [
  {
    path: ':page',
    component: TicketsComponent,
    data: {
      title: $localize`Заявки`
    }
  },
  {
    path: '',
    redirectTo: '1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule {
}
