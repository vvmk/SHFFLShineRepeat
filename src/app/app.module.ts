import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DrillRunnerComponent } from './drill-runner/drill-runner.component';
import { RoutineListComponent } from './routine-list/routine-list.component';
import { RoutineListItemComponent } from './routine-list-item/routine-list-item.component';
import { RoutineViewComponent } from './routine-view/routine-view.component';
import { EndpointService } from './endpoint.service';
import { RoutineService } from './routine.service';

@NgModule({
  declarations: [
    AppComponent,
    DrillRunnerComponent,
    RoutineListComponent,
    RoutineListItemComponent,
    RoutineViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
      EndpointService,
      RoutineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
