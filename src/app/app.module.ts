import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ClientSignupComponent } from './client-signup/client-signup.component';
import { WorkerSignupComponent } from './worker-signup/worker-signup.component';
import { LoginComponent } from './login/login.component';
import { WorkerDashboardComponent } from './worker-dashboard/worker-dashboard.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundPageComponent,
    ClientSignupComponent,
    WorkerSignupComponent,
    LoginComponent,
    WorkerDashboardComponent,
    ClientDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
