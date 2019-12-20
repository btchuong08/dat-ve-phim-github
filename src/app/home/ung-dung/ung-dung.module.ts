import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UngDungRoutingModule } from './ung-dung-routing.module';
import { UngDungComponent } from './ung-dung.component';


@NgModule({
  declarations: [UngDungComponent],
  imports: [
    CommonModule,
    UngDungRoutingModule
  ],
  exports: [UngDungComponent]
})
export class UngDungModule { }
