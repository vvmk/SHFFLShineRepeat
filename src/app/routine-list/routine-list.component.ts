import { Component, OnInit } from '@angular/core';
import { RoutineService } from '../services/routine.service';
import { UserService } from '../services/user.service';
import { Routine } from '../interfaces/routine';
import { User } from '../interfaces/user';

@Component({
    selector: 'app-routine-list',
    templateUrl: './routine-list.component.html',
    styleUrls: ['./routine-list.component.css']
})
export class RoutineListComponent implements OnInit {
    routines: Routine[];
    userId: string = '1';
    errorMessage: string;

    constructor(
        private _routineService: RoutineService,
        private _userService: UserService) {

    }

    ngOnInit() {
        this._userService.getUser()
        .subscribe(
            user => this.userId = user.userId);
        
        this._routineService.getUserRoutines(this.userId)
        .subscribe(
            routines => this.routines = routines,
            error => this.errorMessage = <any>error);
   }
}
