import { Component, OnInit } from '@angular/core';
import { faStopwatch, faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';
import { RosterService } from '../services/roster.service';

@Component({
  selector: 'ssr-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  faStopwatch = faStopwatch;
  faEdit = faEdit;
  faSearch = faSearch;
    roster: string[];

  constructor(
    private rosterService: RosterService,
  ) { }

  ngOnInit() {
      this.roster = this.rosterService.getRoster();
  }

}
