import { Component, OnInit } from '@angular/core';
import { SignupSubmission, AuthService } from '../api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-signup',
  templateUrl: './client-signup.component.html',
  styleUrls: ['./client-signup.component.css']
})
export class ClientSignupComponent implements OnInit {
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
      this.myRouterServ.navigateByUrl('/:clientId');
    })
    .catch((err) => {
      alert('Sorry! There was a problem with your sign up!');
      console.log(err);
    });
  }
}
