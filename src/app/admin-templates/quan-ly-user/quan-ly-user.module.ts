import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanLyUserRoutingModule } from './quan-ly-user-routing.module';
import { QuanLyUserComponent } from './quan-ly-user.component';


@NgModule({
  declarations: [QuanLyUserComponent],
  imports: [
    CommonModule,
    QuanLyUserRoutingModule
  ]
})
export class QuanLyUserModule { }
