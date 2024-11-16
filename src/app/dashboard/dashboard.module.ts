import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {SidebarComponent} from '../shared/sidebar/sidebar.component';
import {HeaderComponent} from '../shared/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectTypeComponent} from './userViews/transactions/create/formulaire/select-type.component';
import { CreditRequestsUserComponent} from './userViews/credit-requests/read/read.component';
import {CreditRequestFormComponent} from './userViews/credit-requests/create/formulaire/form.component';
import {CreditRequestDoneComponent} from './userViews/credit-requests/create/done/done.component';
import {ManageTransactionsComponent} from './transactions/manage/manage.component';


@NgModule({
  declarations: [
    SelectTypeComponent,
    CreditRequestsUserComponent,
    CreditRequestFormComponent,
    CreditRequestDoneComponent,
    ManageTransactionsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    SidebarComponent,
    HeaderComponent,
    ReactiveFormsModule,

  ]
})
export class DashboardModule { }
