import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './auth.service';

const backendUrl = 'http://localhost:3000';

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
  adress: Address;
  availabilities: Array<Availability>;
}

export class Address {
  string: String;
  lat: number;
  long: number;
}

export class Availability {
  type: String;
  adress: Address;
  worker: User;
  startDate: Date;
  endDate: Date;
}
