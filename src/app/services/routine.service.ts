
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError, tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Routine } from '../interfaces/routine';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
import { UserService } from './user.service';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class RoutineService {
    routineSubscription: ReplaySubject<Routine[]> = new ReplaySubject(1);
    routineLibrary: Routine[] = [];

    constructor(private _http: HttpClient, 
        private _e: EndpointService,
        private _userService: UserService) {}

    getUserRoutines(): ReplaySubject<Routine[]> {
        const url: string = this._e.getLibraryUrl(this._userService.userId);

        this._http.get<Routine[]>(url).subscribe(res => {
                this.routineSubscription.next(res);
                console.log('look here: ' + res['routines']);
                this.routineLibrary = res['routines'];
        });
        return this.routineSubscription;
    }

    getRoutineById(routineId: string): Routine {
        return this.routineLibrary[routineId];
    }

    isValidRoutineId(id: number): boolean {
        return id < this.routineLibrary.length;
    }
}
