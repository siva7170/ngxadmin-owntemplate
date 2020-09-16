import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule, NbToastrModule,
  NbUserModule
} from '@nebular/theme';
import {DashboardComponent} from './dashboard.component';
import {ThemeModule} from '../@theme/theme.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    DashboardRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbIconModule,
    NbMenuModule,
    NbActionsModule,
    NbCardModule,
    NbUserModule,
    NbToastrModule
  ]
})
// @ts-ignore
export class DashboardModule { }
