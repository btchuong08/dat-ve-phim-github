import { ComponentsModule } from './../components/components.module';

import { DanhSachPhimModule } from './danh-sach-phim/danh-sach-phim.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { SafePipeModule } from 'safe-pipe';
import { SlickModule } from 'ngx-slick';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DanhSachPhimModule,
    ComponentsModule, SafePipeModule,
    SlickModule.forRoot()


  ],
  exports: [HomeComponent]
})
export class HomeModule { }
