import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {SidebarComponent} from '../shared/sidebar/sidebar.component';
import {HeaderComponent} from '../shared/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectTypeComponent} from './userViews/transactions/create/formulaire/select-type.component';


@NgModule({
  declarations: [
    SelectTypeComponent
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
