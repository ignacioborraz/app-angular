import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      //{ path: 'new', component: FormComponent },
      { path: 'new', loadComponent: ()=> import('./views/form-view/form-view.component').then(res=>res.FormViewComponent) },
      //{ path: '**', component: NotFoundComponent },
      { path: '**', loadComponent: ()=> import('./views/not-found/not-found.component').then(res=>res.NotFoundComponent)}
    ],
  },
];
