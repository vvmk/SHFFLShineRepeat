import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Routine } from '../../interfaces/routine';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'creator-routine-form',
    templateUrl: './routine-form.component.html',
    styleUrls: ['./routine-form.component.css']
})
export class RoutineFormComponent implements OnInit {
    routineForm: FormGroup;
    routine: Routine;
    roster: string[];

    constructor(private _userService: UserService) { }

    ngOnInit() {
        this.routineForm = new FormGroup({
            title: new FormControl(),
            character: new FormControl(),
            drills: new FormControl()
        });
    }

    save() {
        console.log(this.routineForm);
    }
}