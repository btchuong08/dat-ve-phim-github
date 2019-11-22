
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SafePipeModule } from 'safe-pipe';
import { HomeToolComponent } from './home-tool/home-tool.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [ComponentsComponent, NavbarComponent, CarouselComponent, HomeToolComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SlickCarouselModule,
    SafePipeModule,MatSliderModule,MatMenuModule,MatButtonModule,MatSelectModule

  ],
  exports: [NavbarComponent, CarouselComponent, HomeToolComponent]
})
export class ComponentsModule { }
