import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChiTietPhimRoutingModule } from './chi-tiet-phim-routing.module';
import { ChiTietPhimComponent } from './chi-tiet-phim.component';
import { MatButtonModule } from '@angular/material/button';
import { SafePipeModule } from 'safe-pipe';

import { NgxLoadingModule } from 'ngx-loading';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
@NgModule({
  declarations: [ChiTietPhimComponent],
  imports: [
    CommonModule,
    ChiTietPhimRoutingModule,
    MatButtonModule,
    SafePipeModule,
    NgxLoadingModule,
    ScrollToModule.forRoot()
  ]
})
export class ChiTietPhimModule { }
