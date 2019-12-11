import { AdminTemplatesModule } from './admin-templates/admin-templates.module';
import { UserTemplatesModule } from './user-templates/user-templates.module';
import { HomeTemplatesModule } from './home-templates/home-templates.module';
import { HomeModule } from './home/home.module';
import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: "", loadChildren: () => HomeTemplatesModule },
  { path: "home", loadChildren: () => HomeTemplatesModule },
  { path: "login", loadChildren: () => UserTemplatesModule },
  { path: "admin", loadChildren: () => AdminTemplatesModule ,  canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
