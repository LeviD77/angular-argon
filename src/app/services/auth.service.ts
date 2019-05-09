import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User>{
    console.log('loginService', email, password);

    return this.http.get<User>('/api/users').pipe(
      tap(user => console.log(user)),
      map(users => (users as any)
        .find(user => user.email === email))
    );
  }

  isLoggedIn(){
    return localStorage.getItem('users') ? true : false;
  }
}
