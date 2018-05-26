import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { RoutineFormComponent } from '../creator/routine-form/routine-form.component';
import { RoutineService } from '../services/routine.service';

@Injectable()
export class RoutineViewGuard implements CanActivate {

    constructor(private _router: Router,
        private _routineService: RoutineService) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const id = route.url[1].path;

        console.log(this._routineService.getLibrary().length)
        if (!this._routineService.isValidRoutineId(+id)) {
            // TODO: reroute to 404 page (when there is one)
            this._router.navigate(['library']);
            return false;
        }
        return true;
    }
}

@Injectable()
export class RoutineFormGuard implements CanDeactivate<RoutineFormComponent> {

    canDeactivate(component: RoutineFormComponent): boolean {
        if (component.routineForm.dirty) {
            return confirm('Navigate away and lose all changes to this routine?');
        }
        return true;
    }
}
