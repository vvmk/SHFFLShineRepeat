import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
    selector: 'ssr-library-header',
    templateUrl: './library-header.component.html',
    styleUrls: ['./library-header.component.css']
})
export class LibraryHeaderComponent implements OnInit {
    @Input() user: User;
    followOrEdit = "Edit";
    // character-portraits-default-spritesheet-01.png
    avatar = '../../../assets/images/avatar-Default.png';
    token = '../../../assets/images/avatar-Default.png';
    // background: url(../../../assets/images/avatar-Default.png);

    constructor() { }

    ngOnInit() {
    }

    followOrEdit(): void {
        console.log("follow/edit not yet implemented"
    }
}
