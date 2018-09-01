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
    public getUserRoutines(userId: string = localStorage.getItem('user_id')): Observable<Routine[] > {
        const url = this.es.getLibraryURL(userId);

        return this.http.get<Routine[]>(url).pipe(
            catchError(err => this.handleError(err))
        );
    }

    public getRoutineById(routineId: string): Observable <Routine> {
        const url = this.es.getRoutineURL(routineId);
        return this.http.get<Routine>(url).pipe(
            catchError(this.handleError)
        );
    }

    public saveRoutine(routine: Routine): Observable <Routine> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };

        if (routine.routine_id === 0) {
            return this.createRoutine(routine, options);
        }

        return this.updateRoutine(routine, options);
    }

    // TODO: verify deletion somehow, right now there's no going back
    public deleteRoutine(routineId: string): Observable <Response> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };

        const url = this.es.getRoutineURL(routineId);
        return this.http.delete<Response>(url, options);
    }

    public isValidRoutineId(id: number): boolean {
        return id < this.routineLibrary.length;
    }

    public initializeRoutine(): Routine {
        return {
            routine_id: -1,
            title: '',
            total_duration: 0,
            character: '',
            original_creator_id: -1,
            creator_id: -1,
            drills: [],
            popularity: 0,
            created: 0,
            description: '',
        };
    }

    private createRoutine(routine: Routine, options: any): Observable <Routine> {
        // TODO: temporary backwards compatability hack while refactoring
        const url = this.es.userRoutineURL('' + routine.creator_id);

        const newRoutine = {
            title: routine.title,
            total_duration: routine.total_duration,
            character: routine.character,
            original_creator_id: routine.original_creator_id,
            creator_id: routine.creator_id,
            drills: routine.drills,
            description: '',
        };

        return this.http.post(url, newRoutine, options).pipe(
            catchError(this.handleError)
        );
    }

    // TODO: this is broken somewhere and is high on my short list.
    private updateRoutine(routine: Routine, options: any): Observable <Routine> {
        // TODO: temporary backwards compatability hack while refactoring
        const url = this.es.userRoutineURL('' + routine.creator_id, '' + routine.routine_id);

        console.log(routine);

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
