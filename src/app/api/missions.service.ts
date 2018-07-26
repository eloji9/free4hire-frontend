import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { User } from './auth.service';

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
      `${backendUrl}/api/process-missions`,
      missionInfo,
      { withCredentials: true }
    )
    .toPromise();
  }

  getWorkerMission(workerId) {
    return this.myHttpServ
    .get(
      `${backendUrl}/api/missions/${workerId}`,
      { withCredentials: true }
    )
    .toPromise();
  }
}

export class MissionCreated {
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
}

export class Mission {
  type: string;
  worker: User;
  client: User;
  startDateTime: Date;
  endDateTime: Date;
  priceHour: string;
  adress: string;
}
