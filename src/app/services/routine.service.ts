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
import { AuthService } from './auth.service';

@Injectable()
export class RoutineService {
    routineLibrary: Routine[] = [];
    userLibrary: Routine[] = [];

    constructor(private http: HttpClient,
        private es: EndpointService,
        private authService: AuthService,
        private userService: UserService) {}

    public getUserRoutines(): Observable<Routine[]> {
        const userId = +localStorage.getItem('user_id');
        const url = this.es.getLibraryURL(userId);

        return this.http.get<Routine[]>(url);
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
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };

        if (routine.routine_id === 0) {
            return this.createRoutine(routine, options);
        }

        return this.updateRoutine(routine, options);
    }

    // TODO: verify deletion somehow, right now there's no going back
    public deleteRoutine(routineId: number): Observable<Response> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };

        const url = this.es.getRoutineURL(routineId);
        return this.http.delete<Response>(url, options);
    }

    public isValidRoutineId(id: number): boolean {
        return id < this.routineLibrary.length;
    }

    public initializeRoutine(): Routine {
        const userId = this.authService.currentUserId;
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

        const userId = this.authService.currentUserId;
        const url = this.es.userRoutineURL(userId);

        console.log(routine);
        const newRoutine = {
            title: routine.title,
            total_duration: routine.total_duration,
            character: routine.character,
            original_creator_id: routine.original_creator_id,
            creator_id: routine.creator_id,
            drills: routine.drills
        };

        return this.http.post(url, newRoutine, options).pipe(
            catchError(this.handleError)
        );
    }

    private updateRoutine(routine: Routine, options): Observable<Routine> {
        const userId = this.authService.currentUserId;
        const url = this.es.userRoutineURL(userId, routine.routine_id);

        console.log(routine);

        return this.http.put(url, routine, options).pipe(
            map(() => routine),
            catchError(this.handleError)
        );
    }

    // TODO: handleError
    private handleError(error: Response): Observable<any> {
        return of(null);
    }
}
