import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
    imports: [
        CommonModule
    ],
        declarations: [
        LoginPageComponent,
        RegisterFormComponent,
        LoginFormComponent
    ]
})
export class UserModule { }
