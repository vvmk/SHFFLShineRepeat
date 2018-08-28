import { Component, OnInit } from '@angular/core';
import { RosterService } from '../services/roster.service';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faStopwatch, faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'ssr-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  faStopwatch = faStopwatch;
  faEdit = faEdit;
  faSearch = faSearch;
  roster: string[];

  registerForm: FormGroup;

  loading = false;
  submitted = false;

  constructor(
    private rosterService: RosterService,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.roster = this.rosterService.getRoster();

    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]
      ],
      tag: ['',
        [
          Validators.required,
          Validators.maxLength(20)
        ]
      ],
      main: ['', Validators.required]
    });

  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      // TODO: navigate to register page, prefilling values to
      // indicate bad validation status
      this.router.navigate(['/register']);
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {
          this.loading = false;
        });
  }
}
