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
  drills: Drill[];
  drillIndex: number;
  drillTitle: string;
  drillTick: number;

  constructor(private _routineService: RoutineService,
              private _route: ActivatedRoute,
              private _router: Router) {
    this.drillIndex = 0;
  }

  runDrills(index: number): void {
    if (index >= this.drills.length) {
      this.drillIndex = 0;
      return;
    }

    const d = this.drills[index];
    this.drillTitle = d.title;
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
    let id = this._route.snapshot.paramMap.get('id');
    this._routineService.getUserRoutines(id)
    .subscribe(
      routines => this.drills = routines[0].drills
      );
  }
}
