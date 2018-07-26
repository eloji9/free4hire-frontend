import { Component, OnInit } from '@angular/core';
import { User, AuthService } from '../api/auth.service';
import { nextTick } from 'q';
import { MissionsService, Mission } from '../api/missions.service';

@Component({
  selector: 'app-user-platform',
  templateUrl: './user-platform.component.html',
  styleUrls: ['./user-platform.component.css']
})
export class UserPlatformComponent implements OnInit {
  userInfo: User;
  missionData: Array<Mission>;

  constructor(
    public myAuthServ: AuthService,
    public myMissionServ: MissionsService,
  ) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.myAuthServ.check()
    .then((response: any) => {
      this.userInfo = response.userDoc;
      this.getUserMission();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  getUserMission() {
    this.myMissionServ.getWorkerMission(this.userInfo._id)
    .then((results: any) => {
      this.missionData = results.missions;
      console.log('-----------------------------------------');
      console.log(this.missionData);
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
