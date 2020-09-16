import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemeModule} from '../@theme/theme.module';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule, NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule, NbToastrModule,
  NbUserModule
} from '@nebular/theme';
import {ChangepasswordComponent} from './changepassword.component';
import {ChangepasswordRoutingModule} from './changepassword-routing.module';
import {FormsModule as ngFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ChangepasswordComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    NbInputModule,
    ChangepasswordRoutingModule,
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
  ]
})
// @ts-ignore
export class ChangepasswordModule { }
