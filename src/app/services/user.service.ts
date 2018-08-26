import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
import { AuthService } from './auth.service';
import { User } from '../interfaces/user';
import { NewUser } from '../interfaces/new-user';
import { Observable, of } from 'rxjs';
import { shareReplay, first } from 'rxjs/operators';

@Injectable()
export class UserService {
    currentUser: User;

    constructor(
        private http: HttpClient,
        private es: EndpointService,
        private auth: AuthService
    ) { }

    // returns user data for a supplied id or the current user if none
    // is provided
    getUser(userId: number = this.auth.currentUserId): Observable<User> {
        return this.http.get<User>(this.es.userURL(userId)).pipe(
            shareReplay()
        );
    }

    saveUser(user: User) {
        this.currentUser = user;
        // PUT user
    }

    // get and cache the current user when logging in or returning
    setUser() {
        this.getUser().pipe(first()).subscribe(user => {
            this.currentUser = user;
            console.log('found user: ', user);
        });
    }

    register(user: NewUser) {
        const url = this.es.baseUrl + '/register';
        return this.http.post(url, user);
    }
}
