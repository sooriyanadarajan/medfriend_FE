import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ComponentsRoutingModule } from './components-routing.module';
import { LayoutsComponent } from './layouts/layouts.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule,
    RouterModule,
    NzMessageModule,
    FormsModule,ReactiveFormsModule 
  ]
})
export class ComponentsModule { }
