import { Routes } from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import { authGuard } from './auth/auth.guard';
import {AppComponent} from './app.component';

export const routes: Routes = [
  {path: 'register' , component: RegisterComponent},
  {path: 'login' , component: LoginComponent},
  {path: '' , component: AppComponent , canActivate: [authGuard]},
];
