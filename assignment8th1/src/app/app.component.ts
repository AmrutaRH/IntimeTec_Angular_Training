import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jwt-auth-demo';
  loggedIn = false;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.authService.currentUser.subscribe(x => {
      if (x && JSON.stringify(x) != '{}') {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
