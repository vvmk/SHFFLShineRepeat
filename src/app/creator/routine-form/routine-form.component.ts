import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
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

    get drills(): FormArray {
        return <FormArray>this.routineForm.get('drills');
    }

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
            routineCharacter: ['', Validators.required],
            drills: this.fb.array([ this.buildDrill() ])
        });
    }

    addDrill(): void {
        this.drills.push(this.buildDrill());
    }

    buildDrill(): FormGroup {
        return this.fb.group({
            drillTitle: ['', [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(50)
            ]],
            drillDuration: ['', [
                Validators.required,
                Validators.min(1),
                Validators.max(5940)
            ]]
        });
    }

    save() {
        console.log('saving: ' + this.routineForm);
    }
}
