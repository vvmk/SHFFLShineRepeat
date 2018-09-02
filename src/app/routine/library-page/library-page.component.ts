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

    constructor(
        private routineService: RoutineService,
        private userService: UserService,
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.userId = this.authService.currentUserId;
        const routeData = this.route.snapshot.data['profile'];
        if (routeData.user && routeData.routine_headers) {
            this.profile = routeData;
        } else {
            this.router.navigate(['/' + routeData['status']]);
            // TODO: This is where I'd put a log...IF I HAD ONE!
        }
    }
}
