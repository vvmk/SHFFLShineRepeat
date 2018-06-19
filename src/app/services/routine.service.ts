import {
    throwError as observableThrowError, Observable, ReplaySubject 
} from 'rxjs';

import { catchError, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Routine } from '../interfaces/routine';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
import { UserService } from './user.service';

@Injectable()
export class RoutineService {
    routineSubscription: ReplaySubject<Routine[]> = new ReplaySubject(1);
    routineLibrary: Routine[] = [];

    constructor(private http: HttpClient, 
        private _e: EndpointService,
        private _userService: UserService) {}

    getUserRoutines(): ReplaySubject<Routine[]> {
        const url = this._e.getLibraryUrl(this._userService.userId);

        this.http.get<Routine[]>(url).subscribe(res => {
            this.routineSubscription.next(res);
            res['routines'].map(r => {
                this.routineLibrary[r.routine_id] = r;
            })
        });
            return this.routineSubscription;
        }

    getRoutineById(routineId: string): Observable<Routine> {
        const url = this._e.getRoutineByIdUrl(routineId);
        return this.http.get<Routine>(url);
    }

    isValidRoutineId(id: number): boolean {
        return id < this.routineLibrary.length;
    }
}
