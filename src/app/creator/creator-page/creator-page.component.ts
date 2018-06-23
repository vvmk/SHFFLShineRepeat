import { Component, OnInit } from '@angular/core';
import { Routine } from '../../interfaces/routine';
import { RoutineService } from '../../services/routine.service';

@Component({
  templateUrl: './creator-page.component.html',
  styleUrls: ['./creator-page.component.css']
})
export class CreatorPageComponent implements OnInit {
  freshRoutine: Routine;

  constructor(
    private routineService: RoutineService
  ) { }

  ngOnInit() {
    this.freshRoutine = this.routineService.initializeRoutine();
  }
}
