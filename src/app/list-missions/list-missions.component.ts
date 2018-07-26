import { Component, OnInit } from '@angular/core';
import { Mission, MissionsService } from '../api/missions.service';

@Component({
  selector: 'app-list-missions',
  templateUrl: './list-missions.component.html',
  styleUrls: ['./list-missions.component.css']
})
export class ListMissionsComponent implements OnInit {
  missions: Array<Mission>;

  constructor(
    private myMissionServ: MissionsService
  ) { }

  ngOnInit() {
    this.fetchMissions();
  }

  fetchMissions() {
    this.myMissionServ.getMissions()
      .then((response: Array<Mission>) => {
        this.missions = response;
      })
      .catch((err) => {
        alert('Sorry! We could not get any mission');
        console.log(err);
      });
  }
}
