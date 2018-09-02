import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ssr-routine-list',
    templateUrl: './routine-list.component.html',
    styleUrls: ['./routine-list.component.scss']
})
export class RoutineListComponent implements OnInit {
    @Input() routineHeaders;
    errorMessage: string;

    constructor() {}

    ngOnInit() {
    }
}
