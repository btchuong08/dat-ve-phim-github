import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhimRoutingModule } from './phim-routing.module';
import { PhimComponent } from './phim.component';


@NgModule({
  declarations: [PhimComponent],
  imports: [
    CommonModule,
    PhimRoutingModule
  ],
  exports: [PhimComponent]
})
export class PhimModule { }
