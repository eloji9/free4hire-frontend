import { Component, OnInit } from '@angular/core';
import { LoginSubmission, AuthService } from '../api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: LoginSubmission = new LoginSubmission();

  constructor(
    public myAuthServ: AuthService,
    public myRouterServ: Router
  ) { }

  ngOnInit() {
  }

  loginSubmit() {
    this.myAuthServ
    .postLogin(this.loginForm)
    .then(reponse => {
      this.myRouterServ.navigateByUrl('/platform');
    })
    .catch((err) => {
      alert('The connection did not work!');
      console.log(err);
    });
  }
}
