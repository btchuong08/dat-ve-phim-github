import { HomeTemplatesModule } from './home-templates/home-templates.module';
import { HomeModule } from './home/home.module';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: "", loadChildren: () => HomeTemplatesModule },
  { path: "home", loadChildren: () => HomeTemplatesModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
