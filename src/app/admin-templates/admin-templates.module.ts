import { PhimComponent } from './phim/phim.component';
import { QuanLyPhimModule } from './quan-ly-phim/quan-ly-phim.module';
import { UserComponent } from './user/user.component';
import { QuanLyUserComponent } from './quan-ly-user/quan-ly-user.component';

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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';


@NgModule({
  declarations: [AdminTemplatesComponent, AdminComponent, AdminNavbarComponent, QuanLyUserComponent, MenuComponent, UserComponent, PhimComponent],
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
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    QuanLyPhimModule


  ]
})
export class AdminTemplatesModule { }
