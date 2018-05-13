import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DrillRunnerComponent } from './drill-runner/drill-runner.component';
import { RoutineListComponent } from './routine-list/routine-list.component';
import { RoutineListItemComponent } from './routine-list-item/routine-list-item.component';
import { RoutineViewComponent } from './routine-view/routine-view.component';
import { EndpointService } from './services/endpoint.service';
import { RoutineService } from './services/routine.service';
import { LibraryPageComponent } from './library-page/library-page.component';
import { DevLandingComponent } from './dev-landing/dev-landing.component';
import { RoutineViewGuardService } from './services/routine-view-guard.service';
import { RoutineModule } from './routine/routine.module';
import { UserModule } from './user/user.module';
import { RunnerModule } from './runner/runner.module';
import { DiscoverModule } from './discover/discover.module';

@NgModule({
  declarations: [
    AppComponent,
    DrillRunnerComponent,
    RoutineListComponent,
    RoutineListItemComponent,
    RoutineViewComponent,
    LibraryPageComponent,
    DevLandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: '', redirectTo: 'dev', pathMatch: 'full' },
        { path: 'dev', component: DevLandingComponent },
        { path: 'routine/:id', component: RoutineViewComponent },
        { path: 'library', component: LibraryPageComponent },
        { path: 'drill-runner', component: DrillRunnerComponent },
        { path: '**', redirectTo: 'dev', pathMatch: 'full' }
    ]),
    RoutineModule,
    UserModule,
    RunnerModule,
    DiscoverModule
  ],
  providers: [
      EndpointService,
      RoutineService,
      RoutineViewGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
