import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { LoginComponent } from './views/pages/login/login.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { Role } from './models/user.model';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate:[AuthGuard],
    data: {
      title: 'Главная',
      role:[
        Role.ADMIN,
        Role.TECHSUPPORT,
        Role.USER,
      ]
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        canActivate:[AuthGuard],
        data: {
          role:[
            Role.ADMIN,
            Role.TECHSUPPORT,
            Role.USER,
          ]
        },
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'tickets',
        canActivate:[AuthGuard],
        data: {
          role:[
            Role.ADMIN,
          ]
        },
        loadChildren: () =>
          import('./views/tickets/tickets.module').then((m) => m.TicketsModule)
      },
      {
        path: 'ticket',
        canActivate:[AuthGuard],
        data: {
          role:[
            Role.ADMIN,
            Role.TECHSUPPORT,
            Role.USER,
          ]
        },
        loadChildren: () =>
          import('./views/tickets/ticket/ticket.module').then((m) => m.TicketModule)
      },
      {
        path: 'users',
        canActivate: [AuthGuard],
        data: {
          role: [
            Role.ADMIN,
          ]
        },
        loadChildren: () =>
          import('./views/users/users.module').then((m) => m.UsersModule)
      },
      {
        path: 'categories',
        canActivate: [AuthGuard],
        data: {
          role:[
            Role.ADMIN,
          ]
        },
        loadChildren: () =>
          import('./views/categories/categories.module').then((m) => m.CategoriesModule)
      },
    ]
  },
    {
      path: '404',
      component: Page404Component,
      data: {
        title: 'Page 404'
      }
    },
    {
      path: 'login',
      component: LoginComponent,
      data: {
        title: 'Login Page'
      }
    },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
