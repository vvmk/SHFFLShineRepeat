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
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'SHFFL->Shine->Repeat';
    loggedIn: boolean;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {

        router.events.subscribe((routerEvent: Event) => {
            this.checkRouterEvent(routerEvent);
        });
    }

    ngOnInit() {
        this.loggedIn = this.authService.isLoggedIn();
    }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    login(): void {

    }

    checkRouterEvent(routerEvent: Event): void {
        if (routerEvent instanceof NavigationStart) {
            this.loggedIn = this.authService.isLoggedIn();
        }
    }
}
