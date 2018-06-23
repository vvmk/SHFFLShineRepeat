import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Routine } from '../../interfaces/routine';
import { UserService } from '../../services/user.service';
import { RoutineService } from '../../services/routine.service';
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

    constructor(
        private userService: UserService,
        private routineService: RoutineService,
        private rosterService: RosterService,
        private guard: RoutineFormGuard,
        private fb: FormBuilder,
        private router: Router
    ) { }

    ngOnInit() {
        this.roster = this.rosterService.getRoster();
        this.routineForm = this.fb.group({
            title: ['',
                [
                    Validators.required,
                    Validators.minLength(1),
                    Validators.maxLength(50)
                ]
            ],
            character: ['', Validators.required],
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
                title: this.routine.title,
                character: this.routine.character
            });

            this.routine.drills.forEach(d => {
                this.drills.push(this.buildDrill(d.drill_title, d.duration));
            });
        }
    }

    addDrill(): void {
        this.drills.push(this.buildDrill());
    }


    buildDrill(title: string = null, duration: number = null): FormGroup {
        return this.fb.group({
            drill_title: [title, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(50)
            ]],
            duration: [duration, [
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
        if (this.routineForm.dirty && this.routineForm.valid) {
            
            // copy the new values over the routine object values
            let r = Object.assign({}, this.routine, this.routineForm.value);
            r = this.setRoutineTotalDuration(r);

            console.log("saving object: ", r);

            this.routineService.saveRoutine(r)
                .subscribe(() => this.onSaveComplete());

        } else if (!this.routineForm.dirty) {
            this.onSaveComplete();
        }
    }

    setRoutineTotalDuration(r: Routine): Routine {
        r.total_duration = r.drills.reduce((a, c) => {
            return a + c.duration;
        }, 0);

        return r;
    }

    private onSaveComplete(): void {
        this.routineForm.reset();
        this.router.navigate(['/library']);
    }
}
