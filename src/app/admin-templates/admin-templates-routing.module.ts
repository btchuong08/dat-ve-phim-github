import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { UserComponent } from './user/user.component';
import { QuanLyUserComponent } from './quan-ly-user/quan-ly-user.component';

import { AdminComponent } from './admin/admin.component';
import { AdminTemplatesComponent } from './admin-templates.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: "", component: AdminTemplatesComponent,
    children:
      [
        { path: "", component: AdminComponent },

        { path: "list-user", component: QuanLyUserComponent },
        { path: "list-phim", component: QuanLyPhimComponent },
        { path: "user/:id", component: UserComponent },




      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTemplatesRoutingModule { }
