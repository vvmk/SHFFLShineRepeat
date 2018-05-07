import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DrillRunnerComponent } from './drill-runner/drill-runner.component';
import { RoutineListComponent } from './routine-list/routine-list.component';
import { RoutineListItemComponent } from './routine-list-item/routine-list-item.component';
import { RoutineViewComponent } from './routine-view/routine-view.component';


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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
