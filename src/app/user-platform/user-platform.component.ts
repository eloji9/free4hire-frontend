import { Component, OnInit } from '@angular/core';
import { User, AuthService } from '../api/auth.service';
import { nextTick } from 'q';

@Component({
  selector: 'app-user-platform',
  templateUrl: './user-platform.component.html',
  styleUrls: ['./user-platform.component.css']
})
export class UserPlatformComponent implements OnInit {
  userInfo: User;

  constructor(
    public myAuthService: AuthService,
  ) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.myAuthService.check()
    .then((response: any) => {
      this.userInfo = response.userDoc;
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // getUserMission() {
  //   this.myMissionServ.getMissions()
  //   .then((results: any) => {
  //     this.missionData = results;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }
}
