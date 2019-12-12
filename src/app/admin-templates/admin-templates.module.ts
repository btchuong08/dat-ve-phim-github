import { QuanLyUserComponent } from './quan-ly-user/quan-ly-user.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTemplatesRoutingModule } from './admin-templates-routing.module';
import { AdminTemplatesComponent } from './admin-templates.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { MenuComponent } from './menu/menu.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AdminTemplatesComponent, AdminComponent, AdminNavbarComponent, QuanLyPhimComponent, QuanLyUserComponent, MenuComponent],
  imports: [
    CommonModule,
    AdminTemplatesRoutingModule,
    MatPaginatorModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class AdminTemplatesModule { }
