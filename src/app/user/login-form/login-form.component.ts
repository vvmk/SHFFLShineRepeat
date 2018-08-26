import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { EndpointService } from '../../services/endpoint.service';

@Component({
  selector: 'ssr-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
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
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    const val = this.loginForm.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password).subscribe(() => {
        if (this.authService.redirectUrl) {
          this.router.navigateByUrl(this.authService.redirectUrl);
        } else {
          this.router.navigate(['/library']);
        }
      });
    }
  }

  forgot() {
    const msg = 'Sorry, this feature doesn\'t exist yet. You think features just grow on trees? Email me and I can reset it for you, or if you don\'t care, just create a new account. This is only a beta.';
    if (confirm(msg)) {
      this.router.navigate(['/register']);
    }
  }
}
