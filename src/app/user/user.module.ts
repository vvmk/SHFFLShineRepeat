import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'login', component: LoginPageComponent }
        ]),
        FormsModule
    ],
    declarations: [
        LoginPageComponent,
        RegisterFormComponent,
        LoginFormComponent
    ]
})
export class UserModule { }
