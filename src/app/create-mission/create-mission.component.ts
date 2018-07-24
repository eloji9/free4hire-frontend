import { Component, OnInit } from '@angular/core';
import { MissionCreated, MissionsService } from '../api/missions.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-mission',
  templateUrl: './create-mission.component.html',
  styleUrls: ['./create-mission.component.css']
})
export class CreateMissionComponent implements OnInit {
  missionForm: MissionCreated = new MissionCreated();

  searchControl: FormControl;

  constructor(
    private myMissionsServ: MissionsService,
    private myRouterServ: Router,
  ) { }

  ngOnInit() {

    this.searchControl = new FormControl();

  }

  missionSubmit() {
    this.myMissionsServ
    .postMission(this.missionForm)
    .then(() => {
      this.myRouterServ.navigateByUrl(`/platform`);
      this.missionForm = new MissionCreated();
    })
    .catch((err) => {
      alert('There is a problem and we were not able to create your mission. We ask you to try again later.');
      console.log(err);
    });
  }

}
