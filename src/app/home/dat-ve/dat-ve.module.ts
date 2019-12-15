import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatVeRoutingModule } from './dat-ve-routing.module';
import { DatVeComponent } from './dat-ve.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DatVeComponent],
  imports: [
    CommonModule,
    DatVeRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule
  ]
})
export class DatVeModule { }
