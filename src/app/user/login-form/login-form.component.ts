import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'ssr-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  credentials = {
    username: '',
    password: ''
  }

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
  }

  loggedIn(): boolean {
    return this.userService.userLoggedIn;
  }
}
