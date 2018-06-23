import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Routine } from '../../interfaces/routine';
import { UserService } from '../../services/user.service';
import { RosterService } from '../../services/roster.service';
import { RoutineFormGuard } from '../../services/routine-guard.service';

@Component({
    selector: 'ssr-creator-routine-form',
    templateUrl: './routine-form.component.html',
    styleUrls: ['./routine-form.component.css']
})
export class RoutineFormComponent implements OnInit {
    @Input() routine: Routine;
    roster: string[];
    routineForm: FormGroup;

    get drills(): FormArray {
        return <FormArray>this.routineForm.get('drills');
    }

    constructor(private _userService: UserService,
        private rosterService: RosterService,
        private guard: RoutineFormGuard,
        private fb: FormBuilder) { }

    ngOnInit() {
        this.roster = this.rosterService.getRoster();
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

        // update the form data for editing routines
        if (this.routine.routine_id > 0) {
            if (this.routineForm) {
                this.routineForm.reset();
                this.routineForm.setControl('drills', this.fb.array([]));
            }

            // TODO: I suspect some fuckery populating the select box.
            this.routineForm.patchValue({
                routineTitle: this.routine.title,
                routineCharacter: this.routine.character
            });

            this.routine.drills.forEach(d => {
                this.drills.push(this.buildDrill(d.drill_title, ''+d.duration));
            });
        }
    }

    addDrill(): void {
        this.drills.push(this.buildDrill());
    }


    buildDrill(title: string = '', duration: string = ''): FormGroup {
        return this.fb.group({
            drillTitle: [title, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(50)
            ]],
            drillDuration: [duration, [
                Validators.required,
                Validators.min(1),
                Validators.max(5940)
            ]]
        });
    }

    removeDrill(id: number): void {
        this.drills.removeAt(id);
    }

    save(): void {
        console.log('saving: ' + this.routineForm);
    }
}
