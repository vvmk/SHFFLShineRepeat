import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EndpointService } from '../services/endpoint.service';
import { Observable, of } from 'rxjs';
import { tap, shareReplay, catchError } from 'rxjs/operators';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserId: number;
  redirectUrl: string;

  constructor(
    private http: HttpClient,
    private es: EndpointService
  ) { }

  isLoggedIn(): boolean {
    return !!this.currentUserId;
  }

  login(email: string, password: string) {
    const url = this.es.baseUrl + '/login';

    const basicAuthString = 'Basic ' + btoa(email + ':' + password);
    const headers = new HttpHeaders({authorization: basicAuthString});

    return this.http.post(url, {}, { headers: headers }).pipe(
      tap(res => this.setSession(res)),
      shareReplay(),
      catchError(err => this.handleError(err)),
    );
  }

  setSession(data): void {
    const expiresAt = Date.now() + 172800000;

    localStorage.setItem('access_token', data['access_token']);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt));
    localStorage.setItem('user_id', data['user']['user_id']);
  }

  logout() {
    this.currentUserId = null;

    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user_id');
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    return JSON.parse(expiration);
  }

  verifyCurrentUser(): void {
    this.currentUserId = +localStorage.getItem('user_id');
  }

  confirm(uid: number, token: string) {
    const body = {
      uid: uid,
      token: token
    };

    const url = this.es.baseUrl + '/confirm';

    return this.http.post(url, body).pipe(
      tap(res => this.setSession(res)),
      shareReplay()
    );
  }

  handleError(err): Observable<any> {
    console.log('login error: ', err);
    return of(err);
  }
}
