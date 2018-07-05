import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
import { User } from '../interfaces/user';
import { Observable ,  ReplaySubject } from 'rxjs';

@Injectable()
export class UserService {
    // for testing until authentication added to service tier
    userId = 8;
    currentUser: ReplaySubject<User> = new ReplaySubject(1);
    userLoggedIn: boolean;

    constructor(private _http: HttpClient,
                private es: EndpointService) {}

    getUser(): ReplaySubject<User> {
        this._http.get<User>(this.es.userURL(this.userId))
            .subscribe(res => this.currentUser.next(res));
        return this.currentUser;
    }

    isLoggedIn(): boolean {
        return this.userLoggedIn;
    }

    logout(): void {
        this.userLoggedIn = false;
    }

    login(deets, callback): void {
        const headers = new HttpHeaders(deets ? {
            authorization: 'Basic ' + btoa(deets.tag + ':' + deets.pw)
        } : {});

        this._http.get<User>(this.es.userURL(this.userId),
            {headers: headers}).subscribe(res => {
                if (res['tag']) {
                    this.userLoggedIn = true;
                } else {
                    this.userLoggedIn = false;
                }
            }
        );
    }
}
