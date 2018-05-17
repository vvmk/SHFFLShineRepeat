import { Component, OnInit, Input } from '@angular/core';
import { Routine } from '../../interfaces/routine';
import { RoutineService } from '../../services/routine.service';
import { Router } from '@angular/router';

@Component({
    selector: 'routine-list-item',
    templateUrl: './routine-list-item.component.html',
    styleUrls: ['./routine-list-item.component.css']
})
export class RoutineListItemComponent implements OnInit {
    @Input() localRoutineId: number;
    @Input() routine: Routine;

    constructor(private _routineService: RoutineService,
                private _router: Router) { }

    ngOnInit() {
    }

    viewRoutine(): void {
        this._router.navigate(['/routine', this.localRoutineId]);
    }
}
