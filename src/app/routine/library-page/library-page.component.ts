import { Component, OnInit } from '@angular/core';
import { RoutineListComponent } from '../routine-list/routine-list.component';
import { LibraryHeaderComponent } from '../library-header/library-header.component';
import { RoutineService } from '../../services/routine.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { Routine } from '../../interfaces/routine';

@Component({
    templateUrl: './library-page.component.html',
    styleUrls: ['./library-page.component.scss']
})
export class LibraryPageComponent implements OnInit {
    user: User = <User>{};
    userId: number;
    routines: Routine[] = [];

    constructor(
        private routineService: RoutineService,
        private userService: UserService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.userId = this.authService.currentUserId;
        this.userService.getUser().subscribe(u => this.user = u);
        this.routineService.getUserRoutines()
            .subscribe(r => this.routines = r);
    }
}
