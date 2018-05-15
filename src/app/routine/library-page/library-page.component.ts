import { Component, OnInit } from '@angular/core';
import { RoutineListComponent } from '../routine-list/routine-list.component';
import { LibraryHeaderComponent } from '../library-header/library-header.component';
import { RoutineService } from '../../services/routine.service';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { Routine } from '../../interfaces/routine';

@Component({
    templateUrl: './library-page.component.html',
    styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent implements OnInit {
    user: User;
    routines: Routine[];

    constructor(private _routineService: RoutineService,
                private _userService: UserService) {}

    ngOnInit() {
        this.user = this._userService.getUser();
        this.routines = this._routineService.getLibrary();
    }
}
