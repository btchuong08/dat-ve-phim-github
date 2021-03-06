
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhimRoutingModule } from './phim-routing.module';
import { PhimComponent } from './phim.component';
import { MatButtonModule } from '@angular/material/button';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [PhimComponent],
  imports: [
    CommonModule,
    PhimRoutingModule,
    MatButtonModule,

  ],
  exports: [PhimComponent]
})
export class PhimModule { }
