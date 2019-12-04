import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatVeRoutingModule } from './dat-ve-routing.module';
import { DatVeComponent } from './dat-ve.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [DatVeComponent],
  imports: [
    CommonModule,
    DatVeRoutingModule,
    MatInputModule,
    MatCheckboxModule
  ]
})
export class DatVeModule { }
