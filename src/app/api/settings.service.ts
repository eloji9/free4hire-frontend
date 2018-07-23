import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Availability, Adress } from './auth.service';

import { environment } from '../../environments/environment';
const { backendUrl } = environment;

@Injectable({
  providedIn: 'root'
})

export class SettingsService {
  currentUser: User;

  constructor(
    private myHttpServ: HttpClient,
  ) { }

  postSettings(
    settingInfo: SettingSubmission
  ) {
      return this.myHttpServ
      .post(
        `${backendUrl}/api/settings`,
        settingInfo,
        {
          withCredentials: true
        })
        .toPromise()
        .then((response: any) => {
          this.currentUser = response.userDoc;
          return response;
        });
    }
}

export class SettingSubmission {
  firstName: String = '';
  lastName: String = '';
  email: String = '';
  phone: String = '';
  role: boolean;
  oldPassword: String = '';
  newPassword: String = '';
  image: String = '';
  adress: Adress;
  availabilities: Array<Availability>;
}
