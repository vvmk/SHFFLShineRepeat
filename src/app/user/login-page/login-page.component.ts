import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ssr-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  userLoggedIn: boolean;

  constructor() { }

  ngOnInit() {
    this.userLoggedIn = true;
  }

}
