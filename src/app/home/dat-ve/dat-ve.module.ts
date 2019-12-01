import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatVeRoutingModule } from './dat-ve-routing.module';
import { DatVeComponent } from './dat-ve.component';


@NgModule({
  declarations: [DatVeComponent],
  imports: [
    CommonModule,
    DatVeRoutingModule
  ]
})
export class DatVeModule { }
