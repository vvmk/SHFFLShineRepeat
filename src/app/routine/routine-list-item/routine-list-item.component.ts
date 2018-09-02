import { Component, OnInit, Input } from '@angular/core';
import { RosterService } from '../../services/roster.service';
import { Router } from '@angular/router';
import { faClipboard, faBullhorn, faPlay, faStream } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'ssr-routine-list-item',
    templateUrl: './routine-list-item.component.html',
    styleUrls: ['./routine-list-item.component.scss']
})
export class RoutineListItemComponent implements OnInit {
    @Input() routineHeader;

    faClipboard = faClipboard;
    faBullhorn = faBullhorn;
    faStream = faStream;
    faPlay = faPlay;

    constructor(
        private router: Router,
        private rosterService: RosterService
    ) {}

    ngOnInit() {
    }

    viewRoutine(): void {
        this.router.navigate(['/routine', this.routineHeader.routine_id]);
    }

    runRoutine(): void {
        this.router.navigate(['/runner', this.routineHeader.routine_id]);
    }
}
