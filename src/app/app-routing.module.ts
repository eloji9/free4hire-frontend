import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserPlatformComponent } from './user-platform/user-platform.component';
import { SettingsComponent } from './settings/settings.component';
import { VerifAuthenGuard } from './verif-authen/verif-authen.guard';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'platform',
    component: UserPlatformComponent,
    canActivate: [VerifAuthenGuard],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [VerifAuthenGuard],
  },
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
