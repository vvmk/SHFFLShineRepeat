import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Routine } from '../interfaces/routine';
import { RoutineService } from '../services/routine.service';

@Injectable()
export class RoutineResolverService implements Resolve<Routine> {

  constructor(private routineService: RoutineService) {}

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Routine> {
      const id = route.params['id'];

      return null;
    }
}
