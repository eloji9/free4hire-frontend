import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../api/auth.service';

@Injectable({
  providedIn: 'root'
})
export class VerifAuthenGuard implements CanActivate {

  constructor(
    public myAuthServ: AuthService,
    private myRoute: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.myAuthServ.check()
      .then((result) => {
        if (!this.myAuthServ.isLoggedIn()) {
          this.myRoute.navigateByUrl('/login');
          return false;
        }
        return true;
      })
      .catch((err) => {
        this.myRoute.navigateByUrl('/login');
        return false;
      });
  }
}
