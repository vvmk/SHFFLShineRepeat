import { Component, OnInit } from '@angular/core';
import { Drill } from '../../interfaces/drill';
import { Routine } from '../../interfaces/routine';
import { RoutineService } from '../../services/routine.service';
import { RosterService } from '../../services/roster.service';
import { Router, ActivatedRoute } from '@angular/router';
import { faSun, faMoon, faPlay, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
    templateUrl: './drill-runner.component.html',
    styleUrls: ['./drill-runner.component.scss'],
    animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('100ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('100ms', style({opacity: 0}))
        ])
      ]
    )
  ]
})
export class DrillRunnerComponent implements OnInit {
    title = 'SHFFL->Shine->Repeat';
    routine: Routine;
    drills: Drill[] = [];
    drillIndex: number;
    drillTitle: string;
    drillTick: number;

    running = false;

    colorTheme = 'light';
    faSun = faSun;
    faMoon = faMoon;
    faPlay = faPlay;
    faStopwatch = faStopwatch;

    constructor(
        private routineService: RoutineService,
        private route: ActivatedRoute,
        private rosterService: RosterService,
        private router: Router
    ) {
        this.drillIndex = 0;
    }

    ngOnInit() {
        this.route.data.subscribe(data => this.setProps(data));
    }

    runDrills(index: number): void {
        this.running = true;
        if (index >= this.drills.length) {
            this.drillIndex = 0;

            this.running = false;
            return;
        }

        const d = this.drills[index];
        this.drillTitle = d.drill_title;
        this.countdown(d.duration);
    }

    countdown(seconds: number) {
        this.displayTick(seconds);
        if (seconds > 0) {
            setTimeout(() => this.countdown(seconds - 1), 1000);
        } else {
            this.drillIndex++;
            setTimeout(() => this.runDrills(this.drillIndex), 1000);
        }
    }

    displayTick(tick: number) {
        this.drillTick = tick;
    }

    setProps(data): void {
        this.routine = data['routine'];
        this.drills = this.routine.drills;
    }
}
