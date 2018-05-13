import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EndpointService } from './services/endpoint.service';
import { RoutineService } from './services/routine.service';
import { RoutineViewGuardService } from './services/routine-view-guard.service';
import { RoutineModule } from './routine/routine.module';
import { UserModule } from './user/user.module';
import { RunnerModule } from './runner/runner.module';
import { DiscoverModule } from './discover/discover.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: '', redirectTo: 'dev', pathMatch: 'full' },
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
