import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {RouterModule} from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ChartsModule } from 'ng2-charts';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { HttpRequestInterceptor } from './shared/HttpInterceptor';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    NzLayoutModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    NzIconModule,
    ChartsModule,
    FormsModule,
    NzMessageModule
  ],
  exports: [
    SharedModule,
    RouterModule,
    NzIconModule,
    ChartsModule
  ],
  providers: [CookieService, [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    { provide: NZ_I18N, useValue: en_US }
  ],],
  bootstrap: [AppComponent]
})
export class AppModule { }
