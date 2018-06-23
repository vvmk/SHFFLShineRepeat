import {
    throwError as observableThrowError, Observable, of, ReplaySubject 
} from 'rxjs';

import { map, catchError, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Routine } from '../interfaces/routine';
import { User } from '../interfaces/user';
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
        if (routineId === 0) {
            console.log('edit routine with routine_id: 0. not cool');
            return of(this.initializeRoutine());
        }

        const url = this.es.getRoutineByIdUrl(routineId);
        return this.http.get<Routine>(url).pipe(
            catchError(this.handleError)
        );
    }

    public saveRoutine(routine: Routine): Observable<Routine> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };

        if (routine.routine_id === 0) {
            return this.createRoutine(routine, options);
        }

        return this.updateRoutine(routine, options);
    }

    // TODO: deleteRoutine
    public deleteRoutine(routineId: number): Observable<Response> {
        return of(null);
    }

    public isValidRoutineId(id: number): boolean {
        return id < this.routineLibrary.length;
    }

    public initializeRoutine(): Routine {
        let user = <User>{};
        this.userService.currentUser.subscribe(u => user = u);
        return {
            routine_id: 0,
            title: null,
            total_duration: 0,
            character: null,
            creator_tag: user.tag,
            creator_id: user.user_id,
            creation_date: null,
            popularity: 0,
            drills: []
        };
    }

    private createRoutine(routine: Routine, options): Observable<Routine> {
        routine.routine_id = undefined;

        const url = this.es.getRoutineServiceUrl();
        return this.http.post(url, routine, options).pipe(
            catchError(this.handleError)
        );
    }

    private updateRoutine(routine: Routine, options): Observable<Routine> {
        const url = this.es.getRoutineByIdUrl(routine.routine_id);

        return this.http.put(url, routine, options).pipe(
            map(() => routine),
            catchError(this.handleError)
        );
    }

    // TODO: handleError
    private handleError(error: Response): Observable<any> {
        return null;
    }
}
