import {
    throwError as observableThrowError, Observable, of, ReplaySubject
} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Routine } from '../interfaces/routine';
import { User } from '../interfaces/user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EndpointService } from './endpoint.service';

@Injectable()
export class RoutineService {
    routineLibrary: Routine[] = [];
    userLibrary: Routine[] = [];

    constructor(
        private http: HttpClient,
        private es: EndpointService,
    ) {}

    // Default param is to temporarily maintain backwards compatability
    // while refactoring. Old way is deprecated, please explicitly provide
    // a userId.
    public getUserRoutines(userId: string = localStorage.getItem('user_id')): Observable<Routine[]> {
        const url = this.es.getLibraryURL(userId);

        return this.http.get<Routine[]>(url).pipe(
            catchError(err => this.handleError(err))
        );
    }

    public getRoutineById(routineId: string): Observable<Routine> {
        const url = this.es.getRoutineURL(routineId);
        return this.http.get<Routine>(url).pipe(
            catchError(this.handleError)
        );
    }

    public saveRoutine(routine: Routine): Observable<Routine> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };

        if (routine.routine_id) {
            return this.updateRoutine(routine, options);
        }

        return this.createRoutine(routine, options);

    }

    // TODO: verify deletion somehow, right now there's no going back
    public deleteRoutine(routineId: string): Observable<Response> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };

        const url = this.es.getRoutineURL(routineId);
        return this.http.delete<Response>(url, options);
    }

    public isValidRoutineId(id: number): boolean {
        return id < this.routineLibrary.length;
    }

    private createRoutine(routine: Routine, options: any): Observable<Routine> {
        const url = this.es.userRoutineURL('' + routine.creator_id);

        return this.http.post(url, routine, options).pipe(
            catchError(err => this.handleError(err))
        );
    }

    private updateRoutine(routine: Routine, options: any): Observable<Routine> {
        const url = this.es.userRoutineURL('' + routine.creator_id, '' + routine.routine_id);

        return this.http.put(url, routine, options).pipe(
            map(() => routine),
            catchError(this.handleError)
        );
    }

    // TODO: optimization: model-specific error classes
    private handleError(err: any): Observable<any> {
        console.log('RoutineService: handleError: ', err);
        return of(err);
    }
}
