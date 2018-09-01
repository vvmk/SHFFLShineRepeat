import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
import { AuthService } from './auth.service';
import { User } from '../interfaces/user';
import { Routine } from '../interfaces/routine';
import { Profile } from '../interfaces/profile';
import { NewUser } from '../interfaces/new-user';
import { Observable, of } from 'rxjs';
import { shareReplay, first, map } from 'rxjs/operators';

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
            shareReplay()
        );
    }

    /*
     * getProfile returns the profile for the provided userId. The Profile object returned
     * is a DAO containing only the data needed for viewing a user's library/profile page.
     * TODO: optimization: add an endpoint, Go is better at this.
     */
    getProfile(userId: string) {
        this.getUser(userId).subscribe(user => {
            const url = this.es.getLibraryURL(userId);
            return this.http.get(url).pipe(
                map(r => {
                    console.log('getProfile: ', routines);
                })
            });
        });
    }

    saveUser(user: User) {
        this.currentUser = user;
        // PUT user
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
        return this.http.post(url, user);
    }
}
