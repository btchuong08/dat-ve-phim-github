import { QuanLyUserComponent } from './quan-ly-user/quan-ly-user.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTemplatesRoutingModule } from './admin-templates-routing.module';
import { AdminTemplatesComponent } from './admin-templates.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';


@NgModule({
  declarations: [AdminTemplatesComponent, AdminComponent, AdminNavbarComponent, QuanLyPhimComponent, QuanLyUserComponent],
  imports: [
    CommonModule,
    AdminTemplatesRoutingModule
  ]
})
export class AdminTemplatesModule { }
