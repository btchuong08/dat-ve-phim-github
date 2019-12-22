import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanLyUserRoutingModule } from './quan-ly-user-routing.module';
import { QuanLyUserComponent } from './quan-ly-user.component';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuanLyUserRoutingModule,
    MatPaginatorModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatFormFieldModule,
    MatInputModule,

    MatRadioModule,
    MatDialogModule



  ]
})
export class QuanLyUserModule { }
