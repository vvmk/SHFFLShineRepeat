import { Component, OnInit, Input } from '@angular/core';
import { Routine } from '../../interfaces/routine';
import { RoutineService } from '../../services/routine.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ssr-routine-list-item',
    templateUrl: './routine-list-item.component.html',
    styleUrls: ['./routine-list-item.component.css']
})
export class RoutineListItemComponent implements OnInit {
    @Input() routine: Routine;
    avatarUrl: string;

    constructor(private _routineService: RoutineService,
                private router: Router) { }

    ngOnInit() {
        const strippedName = this.routine.character.replace(/(\s*|\.)/,'').toLowerCase();
        const imageName = `list_avatar_${ strippedName }.png`;
        this.avatarUrl = `assets/images/routine-list-avatars/${ imageName }`;
    }

    viewRoutine(): void {
        this.router.navigate(['/routine', this.routine.routine_id]);
    }

    runRoutine(): void {
        this.router.navigate(['/runner', this.routine.routine_id]);
    }
}
