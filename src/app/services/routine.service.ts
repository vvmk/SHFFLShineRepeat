import {
    throwError as observableThrowError, Observable, of, ReplaySubject 
} from 'rxjs';

import { map, catchError, tap } from 'rxjs/operators';

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
        private userService: UserService) {}

    public getUserRoutines(): ReplaySubject<Routine[]> {
        const url = this._e.getLibraryUrl(this.userService.userId);

        this.http.get<Routine[]>(url).subscribe(res => {
            this.routineSubscription.next(res);
            res['routines'].map(r => {
                this.routineLibrary[r.routine_id] = r;
            })
        });

        return this.routineSubscription;
    }

    public getRoutineById(routineId: number): Observable<Routine> {
        // if id is 0, assume new routine
        if (+routineId === 0) {
            return of(this.initializeRoutine());
        }

        const url = this._e.getRoutineByIdUrl(routineId);
        return this.http.get<Routine>(url).pipe(
            catchError(this.handleError)
        );
    }

    public createRoutine(routine: Routine): Observable<Routine> {
        return of(null);
    }

    public updateRoutine(routine: Routine): Observable<Routine> {
        return of(null);
    }

    public deleteRoutine(routineId: number): Observable<Response> {
        return of(null);
    }

    public isValidRoutineId(id: number): boolean {
        return id < this.routineLibrary.length;
    }

    private initializeRoutine(): Routine {
        return {
            routine_id: null,
            title: null,
            total_duration: null,
            character: null,
            creator_tag: null,
            creator_id: null,
            creation_date: null,
            popularity: 0,
            drills: []
        };
    }

    private handleError(error: Response): Observable<any> {
        return null;
    }
}
