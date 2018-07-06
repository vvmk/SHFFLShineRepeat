import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'login', component: LoginPageComponent }
        ]),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginPageComponent,
        RegisterFormComponent,
        LoginFormComponent
    ]
})
export class UserModule { }
