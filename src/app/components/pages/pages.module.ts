import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ChartsModule } from 'ng2-charts';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzEmptyModule } from 'ng-zorro-antd/empty';


import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PendingAppComponent } from './appointment/pending-app/pending-app.component';
import { CompletedAppComponent } from './appointment/completed-app/completed-app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { SettingsComponent } from './settings/settings.component';
import { SecurityComponent } from './settings/security/security.component';
import { ProfileComponent } from './settings/profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import { PaymentHistoryComponent } from './wallet/payment-history/payment-history.component';
import { UpcomingAppComponent } from './appointment/upcoming-app/upcoming-app.component';
import { UploadDocumentComponent } from './settings/upload-document/upload-document.component';


@NgModule({
  declarations: [HomeComponent, PendingAppComponent, CompletedAppComponent, CalendarComponent, SettingsComponent, SecurityComponent, ProfileComponent, WalletComponent, AppointmentComponent, PaymentHistoryComponent, UpcomingAppComponent, UploadDocumentComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    RouterModule,
    NzGridModule,
    NzTableModule,
    NzDropDownModule,
    NzCalendarModule,
    NzBadgeModule,
    NzTabsModule,
    NzFormModule,
    FormsModule,
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
    NzSelectModule,
    NzStepsModule,
    NzMenuModule,
    NzUploadModule,
    NzIconModule,
    NzRadioModule,
    NzMessageModule,
    ChartsModule,
    NzProgressModule,
    NzModalModule,
    NzRateModule,
    NzEmptyModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  exports: [
    NzGridModule,
    NzTableModule,
    NzDropDownModule,
    NzCalendarModule,
    NzBadgeModule,
    NzTabsModule,
    NzFormModule,
    FormsModule,
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
    NzSelectModule,
    NzStepsModule,
    NzMenuModule,
    NzUploadModule,
    NzIconModule,
    NzRadioModule,
    NzMessageModule,
    ChartsModule,
    NzProgressModule,
    NzModalModule,
    NzRateModule,
    NzEmptyModule
  ]
})
export class PagesModule { }
