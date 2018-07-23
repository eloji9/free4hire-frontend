import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ClientSignupComponent } from './client-signup/client-signup.component';
import { WorkerSignupComponent } from './worker-signup/worker-signup.component';
import { LoginComponent } from './login/login.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { WorkerDashboardComponent } from './worker-dashboard/worker-dashboard.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'clientSignup', component: ClientSignupComponent},
  {path: 'workerSignup', component: WorkerSignupComponent},
  {path: 'login', component: LoginComponent},
  {path: ':clientId', component: ClientDashboardComponent},
  {path: ':workerId', component: WorkerDashboardComponent},
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
