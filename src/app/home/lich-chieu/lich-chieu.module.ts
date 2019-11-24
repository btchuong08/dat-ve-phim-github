import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LichChieuRoutingModule } from './lich-chieu-routing.module';
import { LichChieuComponent } from './lich-chieu.component';


@NgModule({
  declarations: [LichChieuComponent],
  imports: [
    CommonModule,
    LichChieuRoutingModule
  ],
  exports: [LichChieuComponent]
})
export class LichChieuModule { }
