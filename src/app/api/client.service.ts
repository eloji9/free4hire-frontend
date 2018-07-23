import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

const backendUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private myHttpServ: HttpClient
  ) { }

  getClientItem(id, role) {
    if (role === 'client') {
      return this.myHttpServ
      .get(
        `${backendUrl}/api/client/${id}`,
        {withCredentials: true} // send cookies accross domain
      )
      .toPromise();
    }
  }

}
