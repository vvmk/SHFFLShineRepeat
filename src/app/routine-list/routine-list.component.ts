import { Component, OnInit } from '@angular/core';
import { RoutineService } from '../routine.service';
import { Routine } from '../interfaces/routine';
import { User } from '../interfaces/user';

@Component({
    selector: 'app-routine-list',
    templateUrl: './routine-list.component.html',
    styleUrls: ['./routine-list.component.css']
})
export class RoutineListComponent implements OnInit {
    routines: Routine[];
    userId: string;
    errorMessage: string;

    constructor(private _routineService: RoutineService, private _user: User) {}

    ngOnInit() {
        this._routineService.getUserRoutines(this.userId)
        .subscribe(
            routines => this.routines = routines,
            error => this.errorMessage = <any>error);
   }
}
