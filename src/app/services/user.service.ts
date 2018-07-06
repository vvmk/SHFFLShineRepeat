import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
import { AuthService } from './auth.service';
import { User } from '../interfaces/user';
import { Observable, of } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable()
export class UserService {
    currentUser: User;

    constructor(
        private http: HttpClient,
        private es: EndpointService,
        private authService: AuthService
    ) { }

    getUser(): Observable<User> {
        if (this.authService.isLoggedIn()) {
            let userId = localStorage.getItem('user_id');

            return this.http.get<User>(this.es.userURL(+userId))
        } else {
            return of(null);
        }
    }
}
