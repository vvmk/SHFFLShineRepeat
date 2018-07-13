import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../interfaces/user';
import { RosterService } from '../../services/roster.service';

@Component({
    selector: 'ssr-library-header',
    templateUrl: './library-header.component.html',
    styleUrls: ['./library-header.component.css']
})
export class LibraryHeaderComponent implements OnInit {
    @Input() user: User;
    followOrEdit = 'Edit';
    avatar = 'assets/images/avatar-Default.png';
    mainTokenUrl: string;

    constructor(
        private rosterService: RosterService
    ) {}

    ngOnInit() {
    }

    followEdit(): void {
        console.log('follow/edit not yet implemented');
    }
}
