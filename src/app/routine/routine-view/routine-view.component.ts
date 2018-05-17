import { Component, OnInit, Input } from '@angular/core';
import { Routine } from '../../interfaces/routine';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutineService } from '../../services/routine.service';

@Component({
    selector: 'app-routine-view',
    templateUrl: './routine-view.component.html',
    styleUrls: ['./routine-view.component.css']
})
export class RoutineViewComponent implements OnInit {
    pageTitle: string = '[Routine title]';
    routine: Routine;

    constructor(private routineService: RoutineService,
                private _route: ActivatedRoute,
                private _router: Router) {}

    ngOnInit() {
        let id = this._route.snapshot.paramMap.get('id');
        this.routine = this.routineService.getRoutineById(id);
        console.log(this.routine);
    }

    runRoutine(): void {
        this._router.navigate(['/drill-runner', this.routine.routineId]);
    }
}
