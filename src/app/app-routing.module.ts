import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserPlatformComponent } from './user-platform/user-platform.component';
import { SettingsComponent } from './settings/settings.component';
import { VerifAuthenGuard } from './verif-authen/verif-authen.guard';
import { CreateMissionComponent } from './create-mission/create-mission.component';
import { MissionDetailsComponent } from './mission-details/mission-details.component';
import { SearchMissionComponent } from './search-mission/search-mission.component';
import { SearchMissionResultComponent } from './search-mission-result/search-mission-result.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { ListMissionsComponent } from './list-missions/list-missions.component';


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
    path: 'user/:workerId',
    component: UserProfilePageComponent,
    canActivate: [VerifAuthenGuard],
  },
  {
    path: 'process-missions',
    component: CreateMissionComponent,
    canActivate: [VerifAuthenGuard],
  },
  {
    path: 'mission/:missionId',
    component: MissionDetailsComponent,
    canActivate: [VerifAuthenGuard],
  },
  {
    path: 'search-mission',
    component: SearchMissionComponent,
    canActivate: [VerifAuthenGuard],
  },
  {
    path: 'user/:workerId',
    component: UserPlatformComponent,
    canActivate: [VerifAuthenGuard],
  },
  {
    path: 'result-search',
    component: SearchMissionResultComponent,
    canActivate: [VerifAuthenGuard],
  },
  {
    path: 'list-missions',
    component: ListMissionsComponent,
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
