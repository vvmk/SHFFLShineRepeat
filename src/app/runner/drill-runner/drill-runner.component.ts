import { Component, OnInit } from '@angular/core';
import { Drill } from '../../interfaces/drill';
import { Routine } from '../../interfaces/routine';
import { RoutineService } from '../../services/routine.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './drill-runner.component.html',
    styleUrls: ['./drill-runner.component.css']
})
export class DrillRunnerComponent implements OnInit {
    title = 'SHFFL->Shine->Repeat';
    routine: Routine;
    drills: Drill[] = [];
    drillIndex: number;
    drillTitle: string;
    drillTick: number;

    constructor(private routineService: RoutineService,
        private route: ActivatedRoute,
        private router: Router) {
        this.drillIndex = 0;
    }

    runDrills(index: number): void {
        if (index >= this.drills.length) {
            this.drillIndex = 0;
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

    ngOnInit() {
        this.route.data.subscribe(data => this.setProps(data));
    }

    setProps(data): void {
        this.routine = data['routine'];
        this.drills = this.routine.drills;
    }
}
