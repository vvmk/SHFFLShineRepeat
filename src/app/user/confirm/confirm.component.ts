import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ssr-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  uid: number;
  token: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.uid = +this.route.snapshot.queryParams['uid'];
    this.token = this.route.snapshot.queryParams['token'];

    this.authService.confirm(this.uid, this.token).subscribe(res => this.handleResponse(res));
  }

  handleResponse(res): void {
    this.router.navigate(['/library']);
  }
}
