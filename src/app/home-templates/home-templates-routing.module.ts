import { DatVeModule } from './../home/dat-ve/dat-ve.module';
import { ChiTietPhimModule } from './../home/chi-tiet-phim/chi-tiet-phim.module';

import { HomeComponent } from './../home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTemplatesComponent } from './home-templates.component';



const routes: Routes = [
  {
    path: "", component: HomeTemplatesComponent, children:
      [
        { path: "", component: HomeComponent },
        { path: "home", component: HomeComponent },

        {
          path: "phim/:id", loadChildren: () => ChiTietPhimModule

        },


      ]

  },
  {
    path: "checkout/:maPhim", loadChildren: () => DatVeModule

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeTemplatesRoutingModule { }
