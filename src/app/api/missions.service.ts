import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
const { backendUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class MissionsService {

  constructor(
    private myHttpServ: HttpClient,
    private myRouterServ: Router,
  ) { }

  getMissions() {
    return this.myHttpServ
    .get(
      `${backendUrl}/api/missions`,
      { withCredentials: true }
    )
    .toPromise();
  }

  postMission(missionInfo: MissionCreated) {
    return this.myHttpServ
    .post(
      `${backendUrl}/api/missions`,
      missionInfo,
      { withCredentials: true }
    )
    .toPromise();
  }
}

export class MissionCreated {
  type: string;
  adress: string;
  // client,
  // worker,
  startDate: Date;
  startHour: string;
  startMin: string;
  endDate: Date;
  endHour: string;
  endMin: string;
  price: number;
  // comment,
}

export class Mission {
  type: string;
  // worker: req.user._id,
  // client:
  startDateTime: Date;
  endDateTime: Date;
  priceHour: string;
  adress: string;
  // comment,
}
