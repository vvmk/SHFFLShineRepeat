import { Component, OnInit } from '@angular/core';
import { Drill } from '../../interfaces/drill';
import { Routine } from '../../interfaces/routine';
import { RoutineService } from '../../services/routine.service';
import { RosterService } from '../../services/roster.service';
import { Router, ActivatedRoute } from '@angular/router';
import { faSun, faMoon, faPlay, faStopwatch, faTimes, faStop, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
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
  private routine: Routine;
  private drills: Drill[] = [];
  private drillIndex: number;
  private drillTitle: string;
  private drillTick: number;

  running = false;

  private clock;
  private visualCues = {
    'visual-background': true,
    'w-100': true,
    'text-dark': true,
    'bg-info': true,
    'bg-warning': false,
    'bg-danger': false,
  };

  colorTheme = 'light';
  faSun = faSun;
  faMoon = faMoon;
  faPlay = faPlay;
  faStopwatch = faStopwatch;
  faTimes = faTimes;
  faPause = faPause;
  faStop = faStop;
  faForward = faForward;
  faBackward = faBackward;

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
    this.updateDisplay(seconds);
    if (seconds > 0) {
      this.clock = setTimeout(() => this.countdown(seconds - 1), 1000);
    } else {
      this.drillIndex++;
      this.clock = setTimeout(() => this.runDrills(this.drillIndex), 1000);
    }
  }

  updateDisplay(tick: number) {
    this.drillTick = tick;
    this.updateVisualCue(tick);
  }

  updateVisualCue(tick: number) {
    if (tick > 10) {
      this.visualCues['bg-info'] = true;

      this.visualCues['bg-danger'] = false;
      this.visualCues['bg-warning'] = false;
    } else if (tick > 3) {
      this.visualCues['bg-warning'] = true;

      this.visualCues['bg-danger'] = false;
      this.visualCues['bg-info'] = false;
    } else {
      this.visualCues['bg-danger'] = true;

      this.visualCues['bg-warning'] = false;
      this.visualCues['bg-info'] = false;
    }
  }

  setProps(data): void {
    this.routine = data['routine'];
    this.drills = this.routine.drills;
  }

  openDrills() {
    this.running = true;
    this.runDrills(0);
  }

  closeDrills() {
    this.running = false;
    clearTimeout(this.clock);
  }
}
