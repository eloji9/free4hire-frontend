import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../api/user-profile.service';
import { User } from '../api/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit {
  workerId: string;
  workerItem: User;

  constructor(
    private myActivatedRouteServ: ActivatedRoute,
    private myWorkerServ: UserProfileService,
    private myRouterServ: Router,
  ) { }

  ngOnInit() {
    this.myActivatedRouteServ.paramMap
    .subscribe((myParams) => {
      this.workerId = myParams.get('workerId');
      this.fetchWorkerDetails();
    });
  }

  fetchWorkerDetails() {
    this.myWorkerServ.getProfile(this.workerId)
    .then((response: User) => {
      this.workerItem = response;
    })
    .catch((err) => {
      alert('Sorry! There was a problem getting the details of the worker');
      console.log(err);
    });
  }

}
