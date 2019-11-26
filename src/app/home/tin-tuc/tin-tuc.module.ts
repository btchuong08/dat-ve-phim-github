import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TinTucRoutingModule } from './tin-tuc-routing.module';
import { TinTucComponent } from './tin-tuc.component';


@NgModule({
  declarations: [TinTucComponent],
  imports: [
    CommonModule,
    TinTucRoutingModule
  ],
  exports: [TinTucComponent]
})
export class TinTucModule { }
