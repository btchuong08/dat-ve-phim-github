import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhimRoutingModule } from './phim-routing.module';
import { PhimComponent } from './phim.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PhimComponent],
  imports: [
    CommonModule,
    PhimRoutingModule,
    FormsModule
  ]
})
export class PhimModule { }
