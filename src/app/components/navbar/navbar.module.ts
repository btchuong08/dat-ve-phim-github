import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    ScrollToModule
  ],
  exports:[NavbarComponent]
})
export class NavbarModule { }
