import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesModule } from '../pipes/pipes.module';

import { DrillRunnerComponent } from './drill-runner/drill-runner.component';
import { RoutineResolverService } from '../services/routine-resolver.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        NgbModule,
        FontAwesomeModule,
        PipesModule,
        RouterModule.forChild([
            {
                path: 'runner/:id',
                component: DrillRunnerComponent,
                resolve: { routine: RoutineResolverService }
            }
        ])
    ],
    declarations: [
        DrillRunnerComponent
    ]
})
export class RunnerModule { }
