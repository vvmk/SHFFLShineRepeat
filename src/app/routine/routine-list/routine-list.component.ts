import { Component, OnInit, Input } from '@angular/core';
import { RoutineService } from '../../services/routine.service';
import { Routine } from '../../interfaces/routine';

@Component({
    selector: 'ssr-routine-list',
    templateUrl: './routine-list.component.html',
    styleUrls: ['./routine-list.component.css']
})
export class RoutineListComponent implements OnInit {
    @Input() routines: Routine[];
    errorMessage: string;

    constructor(private _routineService: RoutineService) {
        //
    }

    ngOnInit() {

    }
}
