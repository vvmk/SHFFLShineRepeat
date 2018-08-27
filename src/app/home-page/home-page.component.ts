import { Component, OnInit } from '@angular/core';
import { faStopwatch, faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ssr-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  faStopwatch = faStopwatch;
  faEdit = faEdit;
  faSearch = faSearch;

  constructor() { }

  ngOnInit() {
  }

}
