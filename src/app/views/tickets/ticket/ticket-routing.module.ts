import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketComponent } from './ticket.component';

const routes: Routes = [
  {
    path: ':id',
    component: TicketComponent,
    data: {
      title: $localize`Заявка`
    },
  },
  {
    path: '',
    redirectTo: '/tickets/1',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule {
}
