import { Component, OnInit } from '@angular/core';
import { SignupSubmission, AuthService } from '../api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worker-signup',
  templateUrl: './worker-signup.component.html',
  styleUrls: ['./worker-signup.component.css']
})
export class WorkerSignupComponent implements OnInit {
  signupForm: SignupSubmission = new SignupSubmission();

  constructor(
    public myAuthServ: AuthService,
    public myRouterServ: Router,
  ) { }

  ngOnInit() {
  }

  signupSubmit() {
    this.myAuthServ.postSignup(this.signupForm)
    .then((response) => {
      // this.myRouterServ.navigateByUrl('/:workerId');
      this.myRouterServ.navigateByUrl('/:workerId');
    })
    .catch((err) => {
      alert('Sorry! There was a problem with your sign up!');
      console.log(err);
    });
  }
}
