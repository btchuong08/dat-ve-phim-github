
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
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from './footer/footer.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [ComponentsComponent, NavbarComponent, CarouselComponent, HomeToolComponent, FooterComponent,],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SlickCarouselModule,
    SafePipeModule, MatSliderModule, MatMenuModule, MatButtonModule, MatSelectModule,
    ScrollToModule.forRoot(),
    AngularFontAwesomeModule

  ],
  exports: [NavbarComponent, CarouselComponent, HomeToolComponent, FooterComponent]
})
export class ComponentsModule { }
