import { Component, OnInit } from '@angular/core';
import { Routine } from '../interfaces/routine';

@Component({
    selector: 'app-routine-view',
    templateUrl: './routine-view.component.html',
    styleUrls: ['./routine-view.component.css']
})
export class RoutineViewComponent implements OnInit {
    pageTitle: string = '[Routine title]';
    routine: Routine;

    constructor() { }

    ngOnInit() {
    }

    runRoutine() {

    }
}
