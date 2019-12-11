import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanLyPhimRoutingModule } from './quan-ly-phim-routing.module';
import { QuanLyPhimComponent } from './quan-ly-phim.component';


@NgModule({
  declarations: [QuanLyPhimComponent],
  imports: [
    CommonModule,
    QuanLyPhimRoutingModule
  ]
})
export class QuanLyPhimModule { }
