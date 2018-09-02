import { Component, OnInit } from '@angular/core';
import { NewRoutine } from '../../models/new-routine';
import { RoutineService } from '../../services/routine.service';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './creator-page.component.html',
  styleUrls: ['./creator-page.component.scss']
})
export class CreatorPageComponent implements OnInit {
  freshRoutine;

  constructor(
    private routineService: RoutineService,
    private auth: AuthService,
  ) {
    const uid = this.auth.currentUserId;
    const r = new NewRoutine();
    r.original_creator_id = uid;
    r.creator_id = uid;

    this.freshRoutine = r;
  }

  ngOnInit() {
  }
}
