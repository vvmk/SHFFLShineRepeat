import { Component, OnInit } from '@angular/core';
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
  credentials = {
    email: '',
    password: ''
  }

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private es: EndpointService
  ) { }

  ngOnInit() {
  }

  login(): void {
    if (this.validateCredentials()) {
      this.authService.login(this.credentials.email, this.credentials.password);
    }
  }

  private validateCredentials(): boolean {
    if (!!this.credentials.email || !!this.credentials.password) {
      return false;
    }

    let re = /^.+@.+$/
    return re.test(String(this.credentials.email));
  }

}
