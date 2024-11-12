
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users/users.component';
import {CreateComponent} from './users/create/create.component';
import {UpdateComponent} from './users/update/update.component';
import {AccountsComponent} from './account/accounts.component';
import {CreditRequestsComponent} from './credit-requests/credit-requests.component';
import {AccountsUserComponent} from './userViews/account/read/read.component';
import {CreateAccountComponent} from './userViews/account/create/create.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'user/create-user', component: CreateComponent },
      { path: 'user/update-user/:id', component: UpdateComponent },
      { path: 'account', component: AccountsComponent },
      { path: 'credit-requests', component: CreditRequestsComponent },
      { path: 'account-for-user', component: AccountsUserComponent },
      { path: 'account-user/create', component: CreateAccountComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
