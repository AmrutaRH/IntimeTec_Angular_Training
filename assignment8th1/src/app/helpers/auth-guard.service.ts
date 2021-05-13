import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if user is logged in, check with help of authentication service
    const currentUser = this.authService.currentUserValue;
    if (currentUser && JSON.stringify(currentUser) != '{}') {
      return true;
    }
    // not logged in, redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
