import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
import { User } from './interfaces/user';
import { Observable } from 'rxjs/observable';

@Injectable()
export class UserService {
    //for testing until authentication added to service tier
    userId: string = '1';

    constructor(private _http: HttpClient, private _e: EndpointService) { }

    getUser(): Observable<User> {
        return this._http.get<User>(this._e.getUserMetaUrl(this.userId));
    }
}
