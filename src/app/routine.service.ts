import { Injectable } from '@angular/core';
import { Routine } from './interfaces/routine';
import { HttpClient } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoutineService {

    constructor(private _http: HttpClient, private _e: EndpointService) {
        // -_-
    }

    getUserRoutines(userId: string): Observable<Routine[]> {
        return this._http.get<Routine[]>(this._e.getLibraryUrl(userId));
    }
}
