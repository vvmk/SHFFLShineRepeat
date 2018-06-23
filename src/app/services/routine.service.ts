import {
    throwError as observableThrowError, Observable, of, ReplaySubject 
} from 'rxjs';

import { map, catchError, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Routine } from '../interfaces/routine';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
import { UserService } from './user.service';

@Injectable()
export class RoutineService {
    routineSubscription: ReplaySubject<Routine[]> = new ReplaySubject(1);
    routineLibrary: Routine[] = [];

    constructor(private http: HttpClient, 
        private es: EndpointService,
        private userService: UserService) {}

    public getUserRoutines(): ReplaySubject<Routine[]> {
        const url = this.es.getLibraryUrl(this.userService.userId);

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

        const url = this.es.getRoutineByIdUrl(routineId);
        return this.http.get<Routine>(url).pipe(
            catchError(this.handleError)
        );
    }

    private createRoutine(routine: Routine, options): Observable<Routine> {
        return of(null);
    }

    private updateRoutine(routine: Routine, options): Observable<Routine> {
        const url = this.es.getRoutineByIdUrl(routine.routine_id);

        return this.http.put(url, routine, options).pipe(
            map(() => routine),
            catchError(this.handleError)
        );
    }

    // TODO: deleteRoutine
    public deleteRoutine(routineId: number): Observable<Response> {
        return of(null);
    }

    public isValidRoutineId(id: number): boolean {
        return id < this.routineLibrary.length;
    }

    public saveRoutine(routine: Routine): Observable<Routine> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };

        if (routine.routine_id === 0) {
            return this.createRoutine(routine, options);
        }

        return this.updateRoutine(routine, options);
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

    // TODO: handleError
    private handleError(error: Response): Observable<any> {
        return null;
    }
}
