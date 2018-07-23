import { Component, OnInit } from '@angular/core';
import { User } from '../api/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../api/client.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {
  id: string;
  clientItem: User;


  constructor(
    private myActivatedRouteServ: ActivatedRoute,
    private myClientServ: ClientService,
    private myRouterServ: Router,
  ) { }

  // ngOnInit() {
  //   this.myActivatedRouteServ.paramMap
  //   .subscribe((myParams) => {
  //     this.id = myParams.get('clientId');
  //     this.fetchClientDetails();
  //   });
  // }

  // fetchClientDetails() {
  //   this.myClientServ.getClientItem(this.id)
  //   .then((response: User) => {
  //     this.clientItem = response;
  //   })
  //   .catch((err) => {
  //     alert('Sorry! There was a problem getting the details of the phone');
  //     console.log(err);
  //   });
  // }

}
