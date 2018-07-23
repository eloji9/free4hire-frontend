import { Component, OnInit } from '@angular/core';
import { User, AuthService } from '../api/auth.service';

@Component({
  selector: 'app-user-platform',
  templateUrl: './user-platform.component.html',
  styleUrls: ['./user-platform.component.css']
})
export class UserPlatformComponent implements OnInit {
  userInfo: User;

  constructor(
    public myAuthService: AuthService,
  ) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.myAuthService.check()
    .then((response: any) => {
      this.userInfo = response.userDoc;
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
