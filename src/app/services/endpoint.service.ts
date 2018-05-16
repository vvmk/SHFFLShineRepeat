import { Injectable } from '@angular/core';

@Injectable()
export class EndpointService {
    private _baseUrl: string = 'http://localhost:8887';
    private _routineServiceId: string = 'ssrroutine';
    private _userServiceId : string = 'ssruser';

    constructor() { }

    public getRoutineServiceUrl(): string {
        return this.joinUrls(this._baseUrl, this._routineServiceId);
    }

    public getUserServiceUrl(): string {
        return this.joinUrls(this._baseUrl, this._userServiceId);
    }

    public getLibraryUrl(userId: string): string {
        return this.joinUrls(
            this.getRoutineServiceUrl(),
            'library',
            userId
        );
    } 

    public getUserMetaUrl(userId: string): string {
        return this.joinUrls(
            this.getUserServiceUrl(),
            'users',
            userId
        );
    }
    private joinUrls(...args: string[]): string {
        return args.join('/');
    }
}
