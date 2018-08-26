import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
import { AuthService } from './auth.service';
import { User } from '../interfaces/user';
import { NewUser } from '../interfaces/new-user';
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

    getUser(userId: number = this.authService.currentUserId): Observable<User> {
        return this.http.get<User>(this.es.userURL(userId)).pipe(
            shareReplay()
        );
    }

    register(user: NewUser) {
        const url = this.es.baseUrl + '/register';
        return this.http.post(url, user);
    }
}
