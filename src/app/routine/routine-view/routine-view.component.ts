import { Component, OnInit, Input } from '@angular/core';
import { Routine } from '../../interfaces/routine';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutineService } from '../../services/routine.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'ssr-routine-view',
    templateUrl: './routine-view.component.html',
    styleUrls: ['./routine-view.component.css']
})
export class RoutineViewComponent implements OnInit {
    pageTitle = '';
    routine: Routine = <Routine>{};
    creator_tag: string;

    constructor(
        private routineService: RoutineService,
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.data.subscribe(data => this.setProps(data));
    }

    setProps(data): void {
        this.routine = data['routine'];
        this.pageTitle = this.routine.title;

        this.userService.getUser(this.routine.creator_id)
            .subscribe(u => this.creator_tag = u.tag);
    }

    runRoutine(): void {
        this.router.navigate(['/runner', this.routine.routine_id]);
    }

    editRoutine(): void {
        this.router.navigate(['/edit', this.routine.routine_id]);
    }

    deleteRoutine(): void {
        const msg = `Really delete this routine (${this.routine.title})?\nThere's no way to undo, it will really be gone forever...`;

        if (confirm(msg)) {

            this.routineService.deleteRoutine(this.routine.routine_id)
            .subscribe(response => {
                // TODO: navigate away and stuff
                console.log("deleted: " + response);
                console.log("TODO: redirect to library/somewhere idk yet");
            });
        }
    }
}

