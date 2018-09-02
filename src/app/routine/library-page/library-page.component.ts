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
        const routeData = this.route.snapshot.data['profile'];

        // ErrorObservables should be caught by the resolver and never reach this component
        // this conditional is left as a precaution in case there is no data but the data
        // is malformed in some way
        if (routeData.user && routeData.routine_headers) {
            this.profile = routeData;
        } else {
            this.router.navigate(['/' + routeData['status']]);
        }

        console.log('myId: ', this.auth.currentUserId);
        console.log('libraryId: ', this.profile.user.user_id);
        this.showWelcome = this.shouldShowWelcome();

    }

    shouldShowWelcome(): boolean {
        return (this.auth.currentUserId === this.profile.user.user_id &&
            this.profile.routine_headers.length <= 0);
    }
}
