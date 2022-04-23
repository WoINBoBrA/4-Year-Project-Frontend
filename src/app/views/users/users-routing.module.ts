import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: ':page',
    component: UsersComponent,
    data: {
      title: $localize`Пользователи`
    },
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
export class UsersRoutingModule {
}
