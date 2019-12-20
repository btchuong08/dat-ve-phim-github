import { UngDungModule } from './ung-dung/ung-dung.module';
import { TinTucModule } from './tin-tuc/tin-tuc.module';
import { LichChieuModule } from './lich-chieu/lich-chieu.module';

import { ComponentsModule } from './../components/components.module';

import { DanhSachPhimModule } from './danh-sach-phim/danh-sach-phim.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { SafePipeModule } from 'safe-pipe';
import { SlickModule } from 'ngx-slick';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DanhSachPhimModule,
    ComponentsModule, SafePipeModule,
    SlickModule.forRoot(),
    LichChieuModule,
    TinTucModule,
    ScrollToModule.forRoot(),
    UngDungModule


  ],
  exports: [HomeComponent]
})
export class HomeModule { }
