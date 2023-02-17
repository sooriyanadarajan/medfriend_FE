import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { HttpClientModule } from '@angular/common/http';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, DoctorSignupComponent, ForgotPasswordComponent, ResetPasswordComponent, DoctorProfileComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    RouterModule,
    NzFormModule,
    FormsModule,
    NzCheckboxModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzStepsModule,
    NzMenuModule,
    NzUploadModule,
    NzIconModule,
    NzRadioModule,
    NzLayoutModule,
    NzMessageModule ,
    HttpClientModule,
    ReactiveFormsModule,
    NzModalModule
  ],
  exports: [
    NzMenuModule,
    NzInputModule,
    NzUploadModule,
    NzIconModule,
    NzRadioModule,
    NzModalModule
  ]
})
export class AuthenticationModule { }
