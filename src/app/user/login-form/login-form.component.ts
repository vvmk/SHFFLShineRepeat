import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { EndpointService } from '../../services/endpoint.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'ssr-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  animations: [
    trigger(
      'loginState', [
        transition(':enter', [
          style({opacity: 0}),
          animate('200ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('200ms', style({opacity: 0}))
        ])
      ]
    )
  ]
})
export class LoginFormComponent implements OnInit {
  loginForm;
  logoSrc = '';
  badLogin = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private auth: AuthService,
    private es: EndpointService
  ) {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  keydown(event) {
    this.badLogin = false;
  }

  login() {
    this.badLogin = false;

    const val = this.loginForm.value;

    if (val.email && val.password) {
      this.auth.login(val.email, val.password).subscribe(res => {
        if (res['status']) {
          this.loginForm.reset();
          this.badLogin = true;
          return;
        }

        if (this.auth.redirectUrl) {
          this.router.navigateByUrl(this.auth.redirectUrl);
        } else {
          this.router.navigate(['/library/' + res['user']['user_id']]);
        }
      });
    }
  }

  forgot() {
    const msg = "Sorry, this feature doesn't exist yet. You think features just grow on trees? Email me and I can reset it for you, or if you don't care, just create a new account. This is only a beta.";
    if (confirm(msg)) {
      this.router.navigate(['/register']);
    }
  }
}
