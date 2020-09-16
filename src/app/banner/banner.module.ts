import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BannerComponent} from './banner.component';
import {ThemeModule} from '../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule, NbToastrModule, NbUserModule
} from '@nebular/theme';
import {FormsModule as ngFormsModule} from '@angular/forms';
import {BannerRoutingModule} from './banner-routing.module';



@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    NbInputModule,
    BannerRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbIconModule,
    NbMenuModule,
    NbActionsModule,
    NbCardModule,
    NbUserModule,
    NbToastrModule,
    ngFormsModule,
    Ng2SmartTableModule,
  ]
})
// @ts-ignore
export class BannerModule { }
