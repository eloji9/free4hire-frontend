import { Component, OnInit } from '@angular/core';
import { User, AuthService } from '../api/auth.service';
import { SettingsService, SettingSubmission, Availability } from '../api/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Address } from 'cluster';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  currentUser: User;
  settingForm: SettingSubmission = new SettingSubmission();
  rForm: FormGroup;
  firstName: string;
  lastName: string;
  phone: string;
  oldPassword: string;
  newPassword: string;
  image: string;
  adress: Address;
  availabilities: Array<Availability>;

  constructor(
    public mySettingsServer: SettingsService,
    private myRouterServ: Router,
    public myAuthServer: AuthService,
    private fb: FormBuilder,
  ) {
    this.rForm = fb.group({
      firstName: [null, Validators.required],
      lastName: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(500)
        ])
      ],
      oldPassword: [null, Validators.required],
      newPassword: [null, Validators.required]
    });
   }

  ngOnInit() {
    this.getUserInfo();
  }

  settingsSubmit() {
    this.mySettingsServer
      .postSettings(this.settingForm)
      .then(response => {
        this.myRouterServ.navigateByUrl('/platform');
      })
      .catch(err => {
        alert('Sorry! We could not sign you up!');
        console.log(err);
      });
  }

  getUserInfo() {
    this.myAuthServer
      .check()
      .then((response: any) => {
        this.currentUser = response.userDoc;
      })
      .catch(err => {
        console.log(err);
      });
  }

}
