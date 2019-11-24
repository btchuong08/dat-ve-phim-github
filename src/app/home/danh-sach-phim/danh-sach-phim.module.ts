import { PhimModule } from './phim/phim.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhSachPhimRoutingModule } from './danh-sach-phim-routing.module';
import { DanhSachPhimComponent } from './danh-sach-phim.component';

import { SafePipeModule } from 'safe-pipe';
import { SlickModule } from 'ngx-slick';

@NgModule({
  declarations: [DanhSachPhimComponent],
  imports: [
    CommonModule,
    DanhSachPhimRoutingModule,
    PhimModule, SafePipeModule,
    SlickModule.forRoot(),

  ],
  exports: [DanhSachPhimComponent]
})
export class DanhSachPhimModule { }
