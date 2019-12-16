import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanLyPhimRoutingModule } from './quan-ly-phim-routing.module';
import { QuanLyPhimComponent } from './quan-ly-phim.component';




import { NgForm } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [QuanLyPhimComponent],
  imports: [
    CommonModule,
    QuanLyPhimRoutingModule,
    CommonModule,

    MatPaginatorModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatFormFieldModule,
    MatInputModule,
    NgForm,
    MatRadioModule,
    MatDialogModule


  ],
  exports: [QuanLyPhimComponent]
})
export class QuanLyPhimModule { }
