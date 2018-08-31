import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DrillRunnerComponent } from './drill-runner/drill-runner.component';
import { RoutineResolverService } from '../services/routine-resolver.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        FontAwesomeModule,
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
