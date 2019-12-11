import { QuanLyPhimComponent } from './../quan-ly-phim/quan-ly-phim.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path:"", component : AdminComponent, children:
  [
    { path: "list-phim", component:QuanLyPhimComponent  },
    


  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
