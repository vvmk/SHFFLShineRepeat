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

    constructor(private routineService: RoutineService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit() {
        this.route.data.subscribe(data => this.setProps(data));
    }

    setProps(data): void {
        this.routine = data['routine'];
        this.pageTitle = this.routine.title;
    }

    runRoutine(): void {
        this.router.navigate(['/runner', this.routine.routine_id]);
    }

    editRoutine(): void {
        this.router.navigate(['/edit', this.routine.routine_id]);
    }

    deleteRoutine(): void {
        this.routineService.deleteRoutine(this.routine.routine_id)
        .subscribe(response => {
            console.log("deleted: " + response);
            console.log("TODO: redirect to library/somewhere idk yet");
        });
    }
}

