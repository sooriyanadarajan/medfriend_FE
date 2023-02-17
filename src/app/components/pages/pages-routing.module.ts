import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutsComponent } from '../layouts/layouts.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SettingsComponent } from './settings/settings.component';
import { WalletComponent } from './wallet/wallet.component';
import { PaymentHistoryComponent } from './wallet/payment-history/payment-history.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      }, 
      {
        path: 'appointment',
        component: AppointmentComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'wallet',
        component: WalletComponent,
      },
      {
        path: 'payment-history',
        component: PaymentHistoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
