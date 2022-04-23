import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  {
    path: ':page',
    component: CategoriesComponent,
    data: {
      title: $localize`Категории`
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
export class CategoriesRoutingModule {
}
