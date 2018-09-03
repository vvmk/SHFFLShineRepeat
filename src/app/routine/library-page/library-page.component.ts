import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutineListComponent } from '../routine-list/routine-list.component';
import { LibraryHeaderComponent } from '../library-header/library-header.component';
import { RoutineService } from '../../services/routine.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { Routine } from '../../interfaces/routine';
import { Profile } from '../../interfaces/profile';

@Component({
    templateUrl: './library-page.component.html',
    styleUrls: ['./library-page.component.scss']
})
export class LibraryPageComponent implements OnInit {
    userId: number;
    profile: Profile;

    showWelcome = false;

    constructor(
        private routineService: RoutineService,
        private userService: UserService,
        private auth: AuthService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        const routeData = this.route.data.subscribe(data => {
            this.profile = data['profile'];
        });

        this.showWelcome = this.shouldShowWelcome();
    }

    shouldShowWelcome(): boolean {
        return (this.auth.currentUserId === this.profile.user.user_id &&
            this.profile.routine_headers.length <= 0);
    }
}
