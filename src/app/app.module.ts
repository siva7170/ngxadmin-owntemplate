import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line: max-line-length
import {
  NbSidebarModule,
  NbMenuModule,
  NbDatepickerModule,
  NbDialogModule,
  NbWindowModule,
  NbToastrModule, NbCardModule
} from '@nebular/theme';
import {ThemeModule} from './@theme/theme.module';
import {HttpClientModule} from '@angular/common/http';
import {NgxUiLoaderConfig, NgxUiLoaderModule, NgxUiLoaderRouterModule, PB_DIRECTION, POSITION, SPINNER} from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "blur": 5,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#ffffff",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "double-bounce",
  "gap": 24,
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "#ffffff",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
};

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbCardModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule.forRoot({
      showForeground: true,
      //exclude: excludeRequests
    }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    //NbThemeModule.forRoot({ name: 'default' }),
    ThemeModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule { }
