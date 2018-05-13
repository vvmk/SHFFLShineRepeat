import { Component } from '@angular/core';
import { RoutineService } from './services/routine.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ RoutineService ]
})
export class AppComponent {
    title: string = 'SHFFL->Shine->Repeat';

    constructor() {}
}