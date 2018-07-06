import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EndpointService } from '../services/endpoint.service';
import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;

  constructor(
    private http: HttpClient,
    private es: EndpointService
  ) { }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  login(email: string, password: string) {
    const url = this.es.baseUrl + '/login';

    let basicAuthString = 'Basic ' + btoa(email + ':' + password);
    let headers = new HttpHeaders({authorization: basicAuthString});

    console.log(basicAuthString);

    return this.http.post(url, {}, { headers: headers }).pipe(
      tap(res => this.setSession(res)),
      shareReplay()
    );
  }

  setSession(data): void {
    const expiresAt = Date.now() + 172800000;

    localStorage.setItem('access_token', data['access_token']);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt));
    localStorage.setItem('user_id', data['user']['user_id']);
  }

  logout() {
    this.currentUser = null;

    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user_id');
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    return JSON.parse(expiration);
  }
}
