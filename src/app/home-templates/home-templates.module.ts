import { RouterModule } from '@angular/router';
import { FooterComponent } from './../components/footer/footer.component';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTemplatesRoutingModule } from './home-templates-routing.module';
import { HomeTemplatesComponent } from './home-templates.component';
import { HomeModule } from '../home/home.module';
import { ComponentsModule } from '../components/components.module';
import { MatInputModule } from '@angular/material';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [HomeTemplatesComponent],
  imports: [
    CommonModule,
    HomeTemplatesRoutingModule,
    HomeModule, ComponentsModule,
    MatInputModule,
    ScrollToModule.forRoot()

  ]
})
export class HomeTemplatesModule { }
