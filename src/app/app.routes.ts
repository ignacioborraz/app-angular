import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadComponent: ()=> import('./views/login-view/login-view.component').then(res => res.LoginViewComponent) },
      { path: 'register', loadComponent: ()=> import('./views/register-view/register-view.component').then(res => res.RegisterViewComponent) },
    ]
  },
];
