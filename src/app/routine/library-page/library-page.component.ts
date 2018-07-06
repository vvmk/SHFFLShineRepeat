import { Component, OnInit } from '@angular/core';
import { RoutineListComponent } from '../routine-list/routine-list.component';
import { LibraryHeaderComponent } from '../library-header/library-header.component';
import { RoutineService } from '../../services/routine.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';
import { Routine } from '../../interfaces/routine';

@Component({
    templateUrl: './library-page.component.html',
    styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent implements OnInit {
    user: User = <User>{};
    routines: Routine[] = [];

    constructor(
        private routineService: RoutineService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.user = this.authService.currentUser;
        this.routineService.getUserRoutines()
            .subscribe(r => this.routines = r['routines']);
    }
}
