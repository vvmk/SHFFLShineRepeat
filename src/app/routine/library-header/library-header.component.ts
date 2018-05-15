import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
    selector: 'library-header',
    templateUrl: './library-header.component.html',
    styleUrls: ['./library-header.component.css']
})
export class LibraryHeaderComponent implements OnInit {
    @Input() user: User;

    constructor() { }

    ngOnInit() {
    }

}
