import { Injectable } from '@angular/core';

@Injectable()
export class EndpointService {
    // TODO: move this to env
    public baseUrl = 'http://localhost:8001';

    constructor() { }

    // NOTE: URLs consisting of the base url plus one word
    // (i.e.  baseURL/confirm)
    // are omitted from this service, just type 'em

    public userURL(userId: string): string {
        return `${ this.baseUrl }/users/${ userId }`;
    }

    public getRoutineURL(routineId: string) {
        return `${ this.baseUrl }/routines/${ routineId }`;
    }

    public getLibraryURL(userId: string): string {
        return `${ this.baseUrl }/users/${ userId }/library`;
    }

    /*
     * userRoutineURL returns the REST endpoint for the supplied routineId belonging
     * to the user for the supplied user
     * OR the routine creation endpoint of the user if no routineId is supplied.
     */
    public userRoutineURL(userId: string, routineId: string = ''): string {
        const r = (routineId) ? '/' + routineId : '';
        return `${ this.baseUrl }/users/${ userId }/routines${ r }`;
    }

    public forkRoutineURL(userId: number, routineId: string): string {
        return `${ this.baseUrl }/users/${ userId }/fork/${ routineId }`;
    }
}
