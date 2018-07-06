import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'login', component: LoginFormComponent },
            { path: 'register', component: RegisterFormComponent }
        ]),
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [
        RegisterFormComponent,
        LoginFormComponent
    ]
})
export class UserModule { }
