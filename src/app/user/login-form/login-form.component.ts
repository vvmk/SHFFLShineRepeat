import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { EndpointService } from '../../services/endpoint.service';

@Component({
  selector: 'ssr-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private es: EndpointService
  ) {

    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    const val = this.loginForm.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password).subscribe(() => {
        this.router.navigateByUrl('/library');
      });
    }
  }
}
