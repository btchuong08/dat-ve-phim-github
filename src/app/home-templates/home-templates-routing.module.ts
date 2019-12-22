import { DatVeModule } from './../home/dat-ve/dat-ve.module';
import { ChiTietPhimModule } from './../home/chi-tiet-phim/chi-tiet-phim.module';

import { HomeComponent } from './../home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTemplatesComponent } from './home-templates.component';
import {
  AuthGuardService as AuthGuard
} from '../auth/auth-guard.service';
import { ProfileModule } from '../user-templates/profile/profile.module';



const routes: Routes = [
  {
    path: "", component: HomeTemplatesComponent, children:
      [
        { path: "", component: HomeComponent },
        { path: "home", component: HomeComponent },

        {
          path: "phim/:id", loadChildren: () => import('./../home/chi-tiet-phim/chi-tiet-phim.module').then(m => m.ChiTietPhimModule)


        },
        {
          path: "profile", loadChildren: () => import('../user-templates/profile/profile.module').then(m => m.ProfileModule)

          , canActivate: [AuthGuard]
        },


      ]

  },
  {
    path: "checkout/:maLichChieu", loadChildren:  () => import('./../home/dat-ve/dat-ve.module').then(m => m.DatVeModule)
    
    , canActivate: [AuthGuard]

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeTemplatesRoutingModule { }
