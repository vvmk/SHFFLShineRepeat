import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../interfaces/user';
import { RosterService } from '../../services/roster.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'ssr-library-header',
    templateUrl: './library-header.component.html',
    styleUrls: ['./library-header.component.scss']
})
export class LibraryHeaderComponent implements OnInit {
    @Input() user: User;
    followOrEdit = 'Edit';
    avatar = 'assets/images/avatar-Default.png';
    mainTokenUrl: string;

    editing = false;
    bioBuffer: string;

    constructor(
        private rosterService: RosterService,
        private userService: UserService,
        private auth: AuthService,
    ) {
        this.bioBuffer = '';
    }

    ngOnInit() {
    }

    editBio() {
        this.bioBuffer = this.user.bio;
        this.editing = true;
    }

    editSave() {
        this.user.bio = this.bioBuffer;
        this.editing = false;
        this.userService.saveUser(this.user).subscribe(res => {
            if (this.user.bio) {
                this.user = res;
            }
        });
    }

    editCancel() {
        this.bioBuffer = this.user.bio;
        this.editing = false;
    }

    followEdit(): void {
        console.log('follow/edit not yet implemented');
    }
}
