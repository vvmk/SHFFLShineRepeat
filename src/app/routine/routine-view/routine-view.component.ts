import { Component, OnInit, Input } from '@angular/core';
import { Routine } from '../../interfaces/routine';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutineService } from '../../services/routine.service';
import { UserService } from '../../services/user.service';
import { RosterService } from '../../services/roster.service';
import { AuthService } from '../../services/auth.service';
import { faPlay, faEdit, faStopwatch } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'ssr-routine-view',
    templateUrl: './routine-view.component.html',
    styleUrls: ['./routine-view.component.scss']
})
export class RoutineViewComponent implements OnInit {
    pageTitle = '';
    routine: Routine = <Routine>{};
    creatorTag: string;

    faPlay = faPlay;
    faEdit = faEdit;
    faStopwatch = faStopwatch;

    constructor(
        private routineService: RoutineService,
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router,
        private rosterService: RosterService,
        private auth: AuthService
    ) {}

    ngOnInit() {
        this.route.data.subscribe(data => this.setProps(data));
    }

    setProps(data): void {
        this.routine = data['routine'];
        this.pageTitle = this.routine.title;

        this.userService.getUser(this.routine.creator_id)
        .subscribe(u => this.creatorTag = u.tag);
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
                    console.log('deleted: ' + response);
                    console.log('TODO: redirect to library/somewhere idk yet');
                });
        }
    }
}

