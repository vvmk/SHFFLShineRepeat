import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { EndpointService } from './services/endpoint.service';
import { RoutineService } from './services/routine.service';
import { RosterService } from './services/roster.service';
import { RoutineViewGuard, RoutineFormGuard } from './services/routine-guard.service';
import { RoutineResolverService } from './services/routine-resolver.service';
import { UserLibraryResolverService } from './services/user-library-resolver.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';

import { RoutineModule } from './routine/routine.module';
import { UserModule } from './user/user.module';
import { RunnerModule } from './runner/runner.module';
import { DiscoverModule } from './discover/discover.module';
import { CreatorModule } from './creator/creator.module';
import { PipesModule } from './pipes/pipes.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FourOhFourComponent } from './errors/four-oh-four.component';
import { FiveHundredComponent } from './errors/five-hundred.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FourOhFourComponent,
    FiveHundredComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutineModule,
    UserModule,
    RunnerModule,
    DiscoverModule,
    CreatorModule,
    NgbModule,
    NgbDropdownModule,
    FontAwesomeModule,
    PipesModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: '**', redirectTo: '404', pathMatch: 'full' },
      { path: '404', component: FourOhFourComponent },
      { path: '500', component: FiveHundredComponent },
    ], { enableTracing: false})
  ],
  providers: [
    EndpointService,
    RoutineService,
    RoutineFormGuard,
    RoutineViewGuard,
    RoutineResolverService,
    UserLibraryResolverService,
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
