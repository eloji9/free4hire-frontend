import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const { backendUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(
    private myHttpServ: HttpClient
  ) { }

  getProfile(workerId) {
    return this.myHttpServ
    .get(
      `${backendUrl}/api/user/${workerId}`,
      {withCredentials: true}
    )
    .toPromise();
  }
}



