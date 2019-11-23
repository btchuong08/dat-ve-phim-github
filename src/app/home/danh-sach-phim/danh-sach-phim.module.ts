import { PhimModule } from './phim/phim.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhSachPhimRoutingModule } from './danh-sach-phim-routing.module';
import { DanhSachPhimComponent } from './danh-sach-phim.component';

import { SafePipeModule } from 'safe-pipe';
@NgModule({
  declarations: [DanhSachPhimComponent],
  imports: [
    CommonModule,
    DanhSachPhimRoutingModule,
    PhimModule, SafePipeModule
  ],
  exports: [DanhSachPhimComponent]
})
export class DanhSachPhimModule { }
