import { Injectable } from '@angular/core';

@Injectable()
export class EndpointService {
    private _baseUrl = 'http://localhost:8080';
    private _routineServiceId = 'ssrroutine';
    private _userServiceId = 'ssruser';

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
