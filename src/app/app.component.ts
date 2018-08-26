import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { User } from './interfaces/user';
import { Routine } from './interfaces/routine';
import { Observable } from 'rxjs';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
    selector: 'ssr-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'SHFFL->Shine->Repeat';
    loggedIn: boolean;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.router.events.subscribe((routerEvent: Event) => {
            this.checkRouterEvent(routerEvent);
        });
    }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    login(): void {

    }

    checkRouterEvent(routerEvent: Event): void {
        if (routerEvent instanceof NavigationStart) {
            this.authService.verifyCurrentUser();
            this.loggedIn = this.authService.isLoggedIn();
        }
    }
}
