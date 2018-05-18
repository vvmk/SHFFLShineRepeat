import { Component, OnInit } from '@angular/core';
import { RoutineService } from './services/routine.service';
import { UserService } from './services/user.service';
import { User } from './interfaces/user';
import { Routine } from './interfaces/routine';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ RoutineService, UserService ]
})
export class AppComponent implements OnInit {
    title: string = 'SHFFL->Shine->Repeat';
    user: User;

    constructor(private _userService: UserService,
                private _routineService: RoutineService) {}

    ngOnInit() {
        this._userService.requestUser().subscribe(data => this.setUser(data));
        this._routineService.getUserRoutines('1').subscribe(data => this.setLibrary(data));
    }

    setUser(data: User): void {
        this.user = data;
        this._userService.setUser(data);
    }

    setLibrary(data: Routine[]): void {
        this._routineService.setLibrary(data['routines']);
    }
}