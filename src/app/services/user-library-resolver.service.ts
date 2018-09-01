import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Routine } from '../interfaces/routine';
import { Profile } from '../interfaces/profile';
import { UserService } from '../services/user.service';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLibraryResolverService implements Resolve<Profile | any> {

  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile | any> {
    const id = route.params['id'];

    return this.userService.getProfile(id).pipe(
      catchError(err => of(err))
    );
  }
}
