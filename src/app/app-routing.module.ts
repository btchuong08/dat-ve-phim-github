import { ProfileModule } from './user-templates/profile/profile.module';
import { SignupModule } from './user-templates/signup/signup.module';
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
  {
    path: "", loadChildren: () => import('./home-templates/home-templates.module').then(m => m.HomeTemplatesModule)
  },
  {
    path: "home", loadChildren: () => import('./home-templates/home-templates.module').then(m => m.HomeTemplatesModule)

  },
  {
    path: "login", loadChildren: () => import('./user-templates/user-templates.module').then(m => m.UserTemplatesModule)
  },
  {
    path: "signup", loadChildren: () => import('./user-templates/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: "admin", loadChildren: () => import('./admin-templates/admin-templates.module').then(m => m.AdminTemplatesModule)
    , canActivate: [AuthGuard]
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
