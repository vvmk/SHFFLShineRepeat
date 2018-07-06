import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { RosterService } from '../../services/roster.service';

@Component({templateUrl: 'register-form.component.html'})
export class RegisterFormComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    roster: string[];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private rosterService: RosterService
    ) { }

    ngOnInit() {
        this.roster = this.rosterService.getRoster();

        this.registerForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', 
                [
                    Validators.required, 
                    Validators.minLength(6),
                    Validators.maxLength(20)
                ]
            ],
            tag: ['', 
                [
                    Validators.required,
                    Validators.maxLength(20)
                ]
            ],
            main: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/login']);
                },
                error => {
                    this.loading = false;
                });
    }
}
