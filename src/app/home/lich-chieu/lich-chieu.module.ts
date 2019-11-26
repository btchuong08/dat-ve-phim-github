import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LichChieuRoutingModule } from './lich-chieu-routing.module';
import { LichChieuComponent } from './lich-chieu.component';
import {ScrollingModule} from '@angular/cdk/scrolling';



@NgModule({
  declarations: [LichChieuComponent],
  imports: [
    CommonModule,
    LichChieuRoutingModule,ScrollingModule
  ],
  exports: [LichChieuComponent]
})
export class LichChieuModule { }
