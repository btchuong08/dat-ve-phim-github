import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';

import { PhimService } from './service/phim.service';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';

import { Http, HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SafePipeModule } from 'safe-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickModule } from 'ngx-slick';
@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    SafePipeModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpModule,
    CommonModule,
    ComponentsModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    SlickModule.forRoot()


  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [PhimService],
  bootstrap: [AppComponent]
})
export class AppModule { }
