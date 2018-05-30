import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class UserService {
    // for testing until authentication added to service tier
    userId = '1';
    currentUser: ReplaySubject<User> = new ReplaySubject(1);
    userLoggedIn: boolean;

    constructor(private _http: HttpClient,
                private es: EndpointService) {}

    getUser(): ReplaySubject<User> {
        this._http.get<User>(this.es.getUserMetaUrl(this.userId))
            .subscribe(res => this.currentUser.next(res));
        return this.currentUser;
    }

    isLoggedIn(): boolean {
        return this.userLoggedIn;
    }

    logout(): void {
        this.userLoggedIn = false;
    }
}
