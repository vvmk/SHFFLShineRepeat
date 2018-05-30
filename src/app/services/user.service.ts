import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    // for testing until authentication added to service tier
    userId = '1';
    user: User;

    constructor(private _http: HttpClient,
                private _e: EndpointService) {}

    requestUser(): Observable<User> {
        return this._http.get<User>(this._e.getUserMetaUrl(this.userId));
    }

    getUser(): Observable<User> {
        if (this.user && this.user != null) {
            return this.user.asObservable();
        } else {
            return this.requestUser();
        }
    }

    setUser(u: User): void {
        this.user = u;
    }
}
