import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    ScrollToModule,
    AngularFontAwesomeModule
  ],
  exports: []
})
export class NavbarModule { }
