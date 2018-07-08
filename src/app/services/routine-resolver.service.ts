import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Routine } from '../interfaces/routine';
import { RoutineService } from '../services/routine.service';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutineResolverService implements Resolve<Routine> {

  constructor(
    private routineService: RoutineService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Routine> {
      const id = route.params['id'];
      // TODO: This was a hack, is it still doing what it originally did?
      if (isNaN(+id) || +id === 0) {
        this.router.navigate(['/create']);
        return of(null);
      }
      return this.routineService.getRoutineById(id).pipe(
        map(routine => {
          if (routine) {
            return routine;
          }
          console.log(`Routine was not found: ${id}`);
          this.router.navigate(['/fourohfour']);
          return null;
        }),
        catchError(error => {
          // TODO: maybe a 500 page or retry or just 404
          console.log(`Retrieval error: ${error}`);
          this.router.navigate(['/library']);
          return of(null);
        })
      )
    }
}
