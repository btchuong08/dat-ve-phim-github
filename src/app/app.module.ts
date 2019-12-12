import { AdminService } from './service/admin.service';
import { AuthService } from './auth/auth.service';
import { HomeTemplatesModule } from './home-templates/home-templates.module';

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
import { AuthGuardService } from './auth/auth-guard.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    SlickModule.forRoot(),
    HomeTemplatesModule,
    AngularFontAwesomeModule,
    NgxPaginationModule,
    Ng2SearchPipeModule



  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [PhimService, AuthGuardService, AuthService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
