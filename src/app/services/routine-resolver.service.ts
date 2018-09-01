import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Routine } from '../interfaces/routine';
import { RoutineService } from '../services/routine.service';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutineResolverService implements Resolve<Routine | any> {

  constructor(
    private routineService: RoutineService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Routine | any> {
      const id = route.params['id'];

      return this.routineService.getRoutineById(id).pipe(
        catchError(err => of(err))
      );
    }
}
