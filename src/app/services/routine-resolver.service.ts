import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Routine } from '../interfaces/routine.ts';

@Injectable()
export class RoutineResolverService implements Resolve<Routine> {

  constructor() { }
}
