import { Component } from '@angular/core';
import { AuthService } from './api/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    public myAuthServ: AuthService,
  ) {}

  // ngOnInit() {
  //   // Ask the backend about the login status as soon as the app loads
  //   this.myAuthServ.check()
  //   .catch((err) => {
  //     alert('We are having trouble connecting. Is your internet working?');
  //     console.log(err);
  //   });
  // }

  // logoutClick() {
  //   this.myAuthServ.logout()
  //   .catch((err) => {
  //     alert('We are having trouble with logging out.');
  //     console.log(err);
  //   });
  // }
}
