import { Component, OnInit, Input } from '@angular/core';
import { Routine } from '../../interfaces/routine';
import { RoutineService } from '../../services/routine.service';
import { RosterService } from '../../services/roster.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ssr-routine-list-item',
    templateUrl: './routine-list-item.component.html',
    styleUrls: ['./routine-list-item.component.css']
})
export class RoutineListItemComponent implements OnInit {
    @Input() routine: Routine;

    constructor(
        private routineService: RoutineService,
        private router: Router,
        private rosterService: RosterService
    ) {}

    ngOnInit() {
    }

    viewRoutine(): void {
        this.router.navigate(['/routine', this.routine.routine_id]);
    }

    runRoutine(): void {
        this.router.navigate(['/runner', this.routine.routine_id]);
    }
}
