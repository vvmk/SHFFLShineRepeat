import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
import { AuthService } from './auth.service';
import { User } from '../interfaces/user';
import { Routine } from '../interfaces/routine';
import { Profile } from '../interfaces/profile';
import { NewUser } from '../interfaces/new-user';
import { Observable, of } from 'rxjs';
import { shareReplay, first, map, catchError } from 'rxjs/operators';

@Injectable()
export class UserService {
    currentUser: User;

    constructor(
        private http: HttpClient,
        private es: EndpointService,
        private auth: AuthService
    ) {
        this.currentUser = <User>{};
    }

    // TODO: default param provided for temporary backwards compatability
    // during rafactoring only. It should be considered deprecated. Please
    // explicitly provide a userId
    getUser(userId: string = localStorage.getItem('user_id')): Observable<User> {
        return this.http.get<User>(this.es.userURL(userId)).pipe(
            shareReplay(),
            catchError(err => this.handleError(err))
        );
    }

    /*
     * getProfile returns the profile for the provided userId. The Profile object returned
     * is a DAO containing only the data needed for viewing a user's library/profile page.
     * WARNING: the routines returned in this object do not include drills.
     */
    getProfile(userId: string): Observable<any> {
        return this.http.get<Profile>(this.es.userURL(userId) + '/profile');
    }

    saveUser(user: User): Observable<any> {
        this.currentUser = user;

        return this.http.put<User>(this.es.userURL('' + user.user_id), user).pipe(
            catchError(err => this.handleError(err))
        );
    }

    // get and cache the current user when logging in or returning
    setUser() {
        this.getUser().pipe(first()).subscribe(user => {
            this.currentUser = user;
        });
    }

    clearUser() {
        this.currentUser = null;
    }

    register(user: NewUser) {
        const url = this.es.baseUrl + '/register';
        return this.http.post(url, user).pipe(
            catchError(err => this.handleError(err))
        );
    }

    handleError(error: any): Observable<any> {
        console.log('Error: UserService: ', error);
        return of(error);
    }
}
