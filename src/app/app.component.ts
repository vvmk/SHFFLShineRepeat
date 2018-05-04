import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SHFFL->Shine->Repeat';
  drills: Drill[];
  drillIndex: number;
  drillTitle: string;
  drillTick: number;

  constructor() {
      this.drills = [];
      this.drills.push(new Drill('Dash->Wavedash', 10));
      this.drills.push(new Drill('Short hop->Lasers', 15));
      this.drills.push(new Drill('Wavedash (long)', 30));

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
}

class Drill {
    public title: string;
    public duration: number;

    constructor(title: string, duration: number) {
        this.title = title;
        this.duration = duration;
    }
}
