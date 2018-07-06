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
        const userId = +localStorage.getItem('user_id')
        const url = this.es.getLibraryURL(userId);

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

        const url = this.es.getRoutineURL(routineId);
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

    // TODO: verify deletion somehow, right now there's no going back
    public deleteRoutine(routineId: number): Observable<Response> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };

        const url = this.es.getRoutineURL(routineId);
        return this.http.delete<Response>(url, options);
    }

    public isValidRoutineId(id: number): boolean {
        return id < this.routineLibrary.length;
    }

    public initializeRoutine(): Routine {
        const userId = +localStorage.getItem('user_id');
        return {
            routine_id: 0,
            title: null,
            total_duration: 0,
            character: null,
            original_creator_id: userId,
            creator_id: userId,
            drills: [],
            popularity: 0,
            created: 0
        };
    }

    private createRoutine(routine: Routine, options): Observable<Routine> {

        const userId = +localStorage.getItem('user_id');
        const url = this.es.userRoutineURL(userId);

        console.log(routine);
        let newRoutine = {
            title: routine.title,
            total_duration: routine.total_duration,
            character: routine.character,
            original_creator_id: routine.original_creator_id,
            creator_id: routine.creator_id,
            drills: routine.drills
        }

        return this.http.post(url, newRoutine, options).pipe(
            catchError(this.handleError)
        );
    }

    private updateRoutine(routine: Routine, options): Observable<Routine> {
        const url = this.es.getRoutineURL(routine.routine_id);

        console.log(routine);

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
