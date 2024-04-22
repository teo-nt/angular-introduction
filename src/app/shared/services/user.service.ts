import { HttpClient } from '@angular/common/http';
import { Injectable, effect, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Credentials, LoggedInUser, User } from '../interfaces/user';
import { Router } from '@angular/router';

const API_URL = `${environment.apiURL}/user`

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router)

  user = signal<LoggedInUser | null>(null)

  constructor() {
    effect(() => {
      if (this.user()) {
        console.log('User logged in', this.user().fullname)
      } else {
        console.log('No user logged in')
      }
    })
  }

  registerUser(user: User) {
    return this.http.post<{msg: string}>(`${API_URL}/register`, user)
  }

  checkDuplicateEmail(email: string) {
    return this.http.get<{msg: string}>(`${API_URL}/check_duplicate_email/${email}`, {
      headers: {
        Accept: 'application/json'
      }
    })
  }

  loginUser(credentials: Credentials) {
    return this.http.post<{access_token: string}>(`${API_URL}/login`, credentials)
  }

  logoutUser() {
    this.user.set(null)
    localStorage.removeItem('access_token')
    this.router.navigate(['login'])
  }
}
