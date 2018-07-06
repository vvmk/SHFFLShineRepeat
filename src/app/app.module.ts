import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { EndpointService } from './services/endpoint.service';
import { RoutineService } from './services/routine.service';
import { RosterService } from './services/roster.service';
import { RoutineViewGuard, RoutineFormGuard } from './services/routine-guard.service';
import { RoutineResolverService } from './services/routine-resolver.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';

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
    ReactiveFormsModule,
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
      { path: 'fourohfour', component: FourOhFourComponent }
    ], { enableTracing: true})
  ],
  providers: [
    EndpointService,
    RoutineService,
    RoutineFormGuard,
    RoutineViewGuard,
    RoutineResolverService,
    RosterService,
    UserService,
    AuthService,
    AuthGuardService,
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
