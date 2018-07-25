import { Component, OnInit } from '@angular/core';
import { MissionCreated, MissionsService } from '../api/missions.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../api/auth.service';

@Component({
  selector: 'app-create-mission',
  templateUrl: './create-mission.component.html',
  styleUrls: ['./create-mission.component.css']
})
export class CreateMissionComponent implements OnInit {
  missionForm: MissionCreated = new MissionCreated();
  mForm: FormGroup;
  type: string;
  adress: string;
  worker: User;
  startDate: Date;
  startHour: string;
  startMin: string;
  endDate: Date;
  endHour: string;
  endMin: string;
  price: number;
  searchControl: FormControl;

  constructor(
    private myMissionsServ: MissionsService,
    private myRouterServ: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.searchControl = new FormControl();
    this.mForm = this.fb.group({});

  }

  missionSubmit() {
    console.log('this.missionForm');
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
