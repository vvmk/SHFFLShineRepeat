import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class RoutineViewGuardService implements CanActivate {

    constructor(private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = route.url[1].path;
        if (!this.isValidRoutineId(id)) {
            this._router.navigate(['/library']);
            return false;
        }
        return true;
    }

    isValidRoutineId(id: string) {
      //TODO: validate routine id path variable
      return true;
  }
}
