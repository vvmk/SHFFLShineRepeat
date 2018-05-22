import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

    constructor(private _userService: UserService,
        private _rosterService: RosterService,
        private fb: FormBuilder) { }

    ngOnInit() {
        this.roster = this._rosterService.getRoster();
        this.routineForm = this.fb.group({
            routineTitle: ['', 
                [
                    Validators.required,
                    Validators.minLength(1),
                    Validators.maxLength(50)
                ]
            ],
            routineCharacter: ['', Validators.required]
        });
    }

    save() {
        console.log('saving: ' + this.routineForm);
    }
}
