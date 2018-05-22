import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Routine } from '../../interfaces/routine';
import { UserService } from '../../services/user.service';
import { RosterService } from '../../services/roster.service';

@Component({
    selector: 'creator-routine-form',
    templateUrl: './routine-form.component.html',
    styleUrls: ['./routine-form.component.css']
})
export class RoutineFormComponent implements OnInit {
    routine: Routine;
    roster: string[];
    routineForm: FormGroup;
    routineTitle: FormControl = new FormControl();
    routineCharacter: FormControl = new FormControl();

    constructor(private _userService: UserService,
        private _rosterService: RosterService) { }

    ngOnInit() {
        this.roster = this._rosterService.getRoster();
        this.routineForm = new FormGroup({
            routineTitle: this.routineTitle,
            routineCharacter: this.routineCharacter
        });
    }

    save() {
        console.log('saving: ' + this.routineForm);
    }
}
