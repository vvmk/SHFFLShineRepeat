import { Component, OnInit } from '@angular/core';
import { RoutineService } from '../routine.service';
import { Routine } from '../interfaces/routine';

@Component({
    selector: 'app-routine-list',
    templateUrl: './routine-list.component.html',
    styleUrls: ['./routine-list.component.css'],
    providers: [RoutineService]
})
export class RoutineListComponent implements OnInit {
    routines: Routine[];

    constructor(private _routineService: RoutineService) {}

    ngOnInit() {
        this.routines = this._routineService.getUserRoutines();
    }
}
