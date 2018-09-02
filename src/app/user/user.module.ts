import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        RouterModule.forChild([
            { path: 'login', component: LoginFormComponent },
            { path: 'register', component: RegisterFormComponent },
            { path: 'confirm', component: ConfirmComponent }
        ]),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        RegisterFormComponent,
        LoginFormComponent,
        ConfirmComponent
    ]
})
export class UserModule { }
