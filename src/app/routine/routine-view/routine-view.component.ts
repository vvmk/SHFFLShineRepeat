import { Component, OnInit, Input } from '@angular/core';
import { Routine } from '../../interfaces/routine';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutineService } from '../../services/routine.service';

@Component({
    selector: 'ssr-routine-view',
    templateUrl: './routine-view.component.html',
    styleUrls: ['./routine-view.component.css']
})
export class RoutineViewComponent implements OnInit {
    pageTitle = '';
    routine: Routine;
    localRoutineId: number;

    constructor(private routineService: RoutineService,
                private _route: ActivatedRoute,
                private _router: Router) {}

    ngOnInit() {
        const id = this._route.snapshot.paramMap.get('id');
        this.localRoutineId = +id;
        this.routine = this.routineService.getRoutineById(id);
        this.pageTitle = this.routine.title;
    }

    runRoutine(): void {
        this._router.navigate(['/runner', this.localRoutineId]);
    }
}
