import { Injectable } from '@angular/core';

@Injectable()
export class EndpointService {
    public baseUrl = 'http://localhost:8080';

    constructor() { }

    // NOTE: URLs consisting of the base url plus one word
    // (i.e.  baseURL/confirm)
    // are omitted from this service, just type 'em

    public userURL(userId: number): string {
        return `${ this.baseUrl }/users/${ userId }`;
    }

    public getRoutineURL(routineId: number) {
        return `${ this.baseUrl }/routines/${ routineId }`;
    }

    public getLibraryURL(userId: number): string {
        return `${ this.baseUrl }/users/${ userId }/library`;
    }

    public userRoutineURL(userId: number, routineId: number = -1): string {
        let r = '';
        if (routineId > 0) {
            r = `/${ routineId }`;
        }
        return `${ this.baseUrl }/users/${ userId }/routines${ r }`;
    }

    public forkRoutineURL(userId: number, routineId: number): string {
        return `${ this.baseUrl }/users/${ userId }/fork/${ routineId }`;
    }
}
