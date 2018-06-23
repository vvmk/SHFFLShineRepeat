import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Routine } from '../interfaces/routine';
import { RoutineService } from '../services/routine.service';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class RoutineResolverService implements Resolve<Routine> {

  constructor(
    private routineService: RoutineService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Routine> {
      const id = route.params['id'];
      if (isNaN(+id) || +id === 0) {
        console.log(`Invalid routineId: %{id}`);
        this.router.navigate(['/library']);
        return of(null);
      }
      return this.routineService.getRoutineById(id).pipe(
        map(routine => {
          if (routine) {
            return routine;
          }
          console.log(`Routine was not found: ${id}`);
          this.router.navigate(['/library']);
          return null;
        }),
        catchError(error => {
          console.log(`Retrieval error: ${error}`);
          this.router.navigate(['library']);
          return of(null);
        })
      )
    }
}
