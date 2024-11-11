import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {SidebarComponent} from '../shared/sidebar/sidebar.component';
import {HeaderComponent} from '../shared/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidebarComponent,
    HeaderComponent
  ]
})
export class DashboardModule { }