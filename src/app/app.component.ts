import { Component, OnInit } from '@angular/core';
import { RoutineService } from './services/routine.service';
import { UserService } from './services/user.service';
import { User } from './interfaces/user';
import { Routine } from './interfaces/routine';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'ssr-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ RoutineService, UserService ]
})
export class AppComponent implements OnInit {
    title = 'SHFFL->Shine->Repeat';
    user: User;
    userLoggedIn: boolean;

    constructor(private _userService: UserService,
        private _routineService: RoutineService,
        private _router: Router) {}

    ngOnInit() {
        this._userService.requestUser().subscribe(data => this.setUser(data));
        this._routineService.getUserRoutines('1').subscribe(data => this.setLibrary(data));
    }

    setUser(data: User): void {
        this.user = data;
        this._userService.setUser(data);
    }

    setLibrary(data: Routine[]): void {
        const routines = data['routines'];
        this._routineService.setLibrary(routines);
    }

    logout(): void {
        this.userLoggedIn = false;
        this.router.navigate('/login');
    }

    login(): void {
        this.userLoggedIn = true;
    }
}
