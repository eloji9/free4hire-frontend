import { Component, OnInit } from '@angular/core';
import { SignupSubmission, AuthService } from '../api/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: SignupSubmission = new SignupSubmission();
  rForm: FormGroup;
  firstName: string;
  lastName: string;
  email: string;
  originalPassword: string;
  role: boolean;
  // image: string;
  adress: string;
  phone: string;

  constructor(
    public myAuthServ: AuthService,
    public myRouterServ: Router,
    private fb: FormBuilder
  ) {
      this.rForm = fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [
        null, [Validators.required, Validators.email]
      ],
      originalPassword: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{10,}$')
        ])
      ],
      role: [null, Validators.required],
      // image: [null, Validators.required],
      adress: [null, Validators.required],
      phone: [null, Validators.required],
    });
   }

  ngOnInit() {
  }

  signupSubmit() {
    this.myAuthServ
      .postSignup(this.signupForm)
      .then(response => {
        this.myRouterServ.navigateByUrl('/platform');
      })
      .catch(err => {
        alert('Sorry! The log in has not been possible!');
        console.log(err);
      });
  }
}
