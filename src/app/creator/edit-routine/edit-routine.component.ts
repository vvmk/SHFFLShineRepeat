import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoutineService } from '../../services/routine.service';
import { Routine } from '../../interfaces/routine';

@Component({
  selector: 'ssr-edit-routine',
  templateUrl: './edit-routine.component.html',
  styleUrls: ['./edit-routine.component.scss']
})
export class EditRoutineComponent implements OnInit {
  private routine: Routine;

  constructor(
    private routineService: RoutineService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.routine = data['routine']);
  }
}
