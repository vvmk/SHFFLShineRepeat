
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError, tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Routine } from '../interfaces/routine';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
import { UserService } from './user.service';

@Injectable()
export class RoutineService {
    routineLibrary: Routine[];

    constructor(private _http: HttpClient, private _e: EndpointService) {
        // TODO: check local storage for user's library, set it if found
        // else: this.routineLibrary = this.getUserRoutines();
    }

    // TODO: Get the users library and store it locally
    getUserRoutines(userId: string): Observable<Routine[]> {
        const url: string = this._e.getLibraryUrl(userId);

        return this._http.get<Routine[]>(url).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse): Observable<Routine[]> {
        console.log(err.message);
        return observableThrowError(err.message);
    }

    getRoutineById(routineId: string): Routine {
        return this.routineLibrary[routineId];
    }

    getLibrary(): Routine[] {
        return this.routineLibrary;
    }

    setLibrary(library: Routine[]): void {
        this.routineLibrary = library;
    }

    isValidRoutineId(id: number): boolean {
        return id < this.routineLibrary.length;
    }
}
