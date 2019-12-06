import { LoginComponent } from './login/login.component';
import { UserTemplatesComponent } from './user-templates.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", component: UserTemplatesComponent, children:
  [
    { path: "", component: LoginComponent },
    


  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTemplatesRoutingModule { }
