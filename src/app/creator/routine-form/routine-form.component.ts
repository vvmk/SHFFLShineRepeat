import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Routine } from '../../interfaces/routine';
import { NewRoutine } from '../../models/new-routine';
import { AuthService } from '../../services/auth.service';
import { RoutineService } from '../../services/routine.service';
import { RosterService } from '../../services/roster.service';
import { RoutineFormGuard } from '../../services/routine-guard.service';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'ssr-creator-routine-form',
    templateUrl: './routine-form.component.html',
    styleUrls: ['./routine-form.component.scss']
})
export class RoutineFormComponent implements OnInit {
    @Input() routine: Routine | NewRoutine;
    @Input() title: string;

    roster: string[];
    routineForm: FormGroup;

    faMinusCircle = faMinusCircle;
    faPlusCircle = faPlusCircle;

    get drills(): FormArray {
        return <FormArray>this.routineForm.get('drills');
    }

    constructor(
        private routineService: RoutineService,
        private auth: AuthService,
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

        // update the form data if editing a routine
        if (!(this.routine instanceof NewRoutine)) {
            if (this.routineForm) {
                this.routineForm.reset();
                this.routineForm.setControl('drills', this.fb.array([]));
            }

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
                Validators.maxLength(140)
            ]],
            duration: [duration, [
                Validators.required,
                Validators.min(1),
                Validators.max(5999)
            ]]
        });
    }

    removeDrill(id: number): void {
        this.drills.removeAt(id);
    }

    save(): void {
        if (this.routineForm.dirty && this.routineForm.valid) {

            let r = Object.assign({}, this.routine, this.routineForm.value);
            r = this.setRoutineTotalDuration(r);

            this.routineService.saveRoutine(r).subscribe(routine => {
                this.onSaveComplete(routine.routine_id);
            });

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

    private onSaveComplete(id?): void {
        // this.routineForm.reset();
        if (id) {
            this.router.navigate(['/routine/' + id]);
        } else {
            this.router.navigate(['/library/' +  this.auth.currentUserId]);
        }
    }
}
