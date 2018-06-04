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
    routine: Routine = <Routine>{};
    localRoutineId: number;

    constructor(private routineService: RoutineService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.localRoutineId = +id;
        this.routineService.getRoutineById(id)
            .subscribe(r => this.routine = r);
        this.pageTitle = this.routine.title;
    }

    runRoutine(): void {
        this.router.navigate(['/runner', this.localRoutineId]);
    }
}
