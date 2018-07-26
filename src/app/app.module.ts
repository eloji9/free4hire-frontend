import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'ngx-rating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserPlatformComponent } from './user-platform/user-platform.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateMissionComponent } from './create-mission/create-mission.component';
import { MissionDetailsComponent } from './mission-details/mission-details.component';
import { SearchMissionComponent } from './search-mission/search-mission.component';
import { SearchMissionResultComponent } from './search-mission-result/search-mission-result.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { ListMissionsComponent } from './list-missions/list-missions.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundPageComponent,
    SignupComponent,
    LoginComponent,
    UserPlatformComponent,
    SettingsComponent,
    CreateMissionComponent,
    MissionDetailsComponent,
    SearchMissionComponent,
    SearchMissionResultComponent,
    UserProfilePageComponent,
    ListMissionsComponent,
    InvoicesComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RatingModule,
    NgbModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
