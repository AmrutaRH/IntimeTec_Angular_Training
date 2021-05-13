import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // (1) to check wether the user is logged in or not
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  // (2) login functionality, set the token to localstorage
  login(username: string, password: string) {
    // make an API call, store the token to localstorage
    return this.http.post<any>(
      `https://thawing-crag-85603.herokuapp.com/api/users/login`,
      {
        username,
        password
      }
    ).pipe(map(user => {
      // set the token to the localstorage
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }));
  }

  // (3) logout functionality
  logout() {
    // remove the token from localstorage
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }  
}


