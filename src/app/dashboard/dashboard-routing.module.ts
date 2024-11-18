
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
import {ReadComponent} from './userViews/transactions/read/read.component';
import {CreateTransactionComponent} from './userViews/transactions/create/create.component';
import {CreditRequestsUserComponent} from './userViews/credit-requests/read/read.component';
import {CreateCreditRequestComponent} from './userViews/credit-requests/create/create.component';
import {CreditRequestFormComponent} from './userViews/credit-requests/create/formulaire/form.component';
import {SelectTypeComponent} from './userViews/transactions/create/formulaire/select-type.component';
import {CreditRequestDoneComponent} from './userViews/credit-requests/create/done/done.component';
import {ManageTransactionsComponent} from './transactions/manage/manage.component';
import {StatisticsComponent} from './statistics/statistics.component';

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
      { path: 'account-user/create', component: CreateAccountComponent },
      { path: 'transaction-user', component: ReadComponent },
      { path: 'transaction/create', component: CreateTransactionComponent },
      { path: 'transaction/create/select-type', component: SelectTypeComponent },
      { path: 'credit-request-user', component: CreditRequestsUserComponent },
      { path: 'credit-request-user/create', component: CreateCreditRequestComponent },
      { path: 'credit-request-user/create/form', component: CreditRequestFormComponent },
      { path: 'credit-request-user/done', component: CreditRequestDoneComponent },
      { path: 'manage-transactions', component: ManageTransactionsComponent },
      { path: 'statistic', component: StatisticsComponent },



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
