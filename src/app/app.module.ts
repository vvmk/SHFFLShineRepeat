import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { EndpointService } from './services/endpoint.service';
import { RoutineService } from './services/routine.service';
import { RosterService } from './services/roster.service';
import { RoutineViewGuard, RoutineFormGuard } from './services/routine-guard.service';

import { MaterialModule } from './shared/material.module';
import { RoutineModule } from './routine/routine.module';
import { UserModule } from './user/user.module';
import { RunnerModule } from './runner/runner.module';
import { DiscoverModule } from './discover/discover.module';
import { CreatorModule } from './creator/creator.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FourOhFourComponent } from './four-oh-four.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RoutineModule,
    UserModule,
    RunnerModule,
    DiscoverModule,
    CreatorModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: '**', redirectTo: 'fourohfour', pathMatch: 'full' },
      { path: 'fourohfour', component: FourOhFourComponent },
    ]),
  ],
  providers: [
    EndpointService,
    RoutineService,
    RoutineFormGuard,
    RoutineViewGuard,
    RosterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
