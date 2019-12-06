import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTemplatesRoutingModule } from './user-templates-routing.module';
import { UserTemplatesComponent } from './user-templates.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatInputModule } from '@angular/material';

import { MatButtonModule } from '@angular/material/button';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [UserTemplatesComponent, LoginComponent],
  imports: [
    CommonModule,
    UserTemplatesRoutingModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
    
  ]
})
export class UserTemplatesModule { }
