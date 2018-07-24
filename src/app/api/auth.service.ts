import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SimpleWebDriverClient } from 'blocking-proxy/built/lib/simple_webdriver_client';

import { environment } from '../../environments/environment';
const { backendUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;

  constructor(
    private myHttpServ: HttpClient,
    private myRouterServ: Router,
  ) { }

  // GET /api/checklogin
  check() {
    return this.myHttpServ
    .get(
      `${backendUrl}/api/checklogin`,
      {withCredentials: true} // send cookies accross domain
    )
    .toPromise()
    .then((response: any) => {
      this.currentUser = response.userDoc;
      return response;
    });
  }

  // POST /api/login

  postLogin(loginInfo: LoginSubmission) {
    return this.myHttpServ
    .post(
      `${backendUrl}/api/login`,
      loginInfo,
      {withCredentials: true} // send cookies accross domain
    )
    .toPromise()
    .then((response: any) => {
      // update "currentUser" if we log in successfully
      this.currentUser = response.userDoc;
      return response;
    });
  }

  // POST /api/signup

  postSignup(signupInfo: SignupSubmission) {
    return this.myHttpServ
    .post(
      `${backendUrl}/api/signup`,
      signupInfo,
      {withCredentials: true}
    )
    .toPromise()
    .then((response: any) => {
      // update "currentUser" if we log in successfully
      this.currentUser = response.userDoc;
      return response;
    });
  }

  // DELETE /api/logout
  logout() {
    return this.myHttpServ
    .delete(
      `${backendUrl}/api/logout`,
      {withCredentials: true}
    )
    .toPromise()
    .then((response: any) => {
      // update "currentUser" if we log out successfully
      this.currentUser = response.userDoc;
      this.myRouterServ.navigateByUrl('/');
      return response;
    });
  }

  isLoggedIn() {
    if (this.currentUser) {
      return true;
    } else {
      this.myRouterServ.navigateByUrl('/login');
      return false;
    }
  }
}

export class User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  role: boolean;
  // image: string;
  adress: string;
  phone: string;
  missions: Array<Mission>;
  comments: Array<Comment>;
}

export class LoginSubmission {
  email: string;
  loginPassword: string;
}

export class SignupSubmission {
  firstName: string;
  lastName: string;
  email: string;
  role: boolean;
  // image: string;
  adress: string;
  phone: string;
  originalPassword: string;
}

// export class Adress {
//   string: String;
//   lat: number;
//   long: number;
// }

export class Mission {
  type: string;
  adress: string;
  client: string;
  worker: string;
  startDate: Date;
  endDate: Date;
}

export class Comment {
  title: string;
  description: string;
  creator: string;
  forWhom: string;
  rating: number;
}
