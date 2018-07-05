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
    loggedIn: boolean;

    constructor(private _userService: UserService,
        private _routineService: RoutineService,
        private router: Router) {}

    ngOnInit() {
        this._userService.getUser()
            .subscribe(data => this.user = data);
    }

    logout(): void {
        this.loggedIn = false;
        this.router.navigate(['/login']);
    }

    login(): void {
        this.loggedIn = true;
    }
}
