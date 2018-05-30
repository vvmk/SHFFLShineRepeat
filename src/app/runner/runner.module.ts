import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';

import { DrillRunnerComponent } from './drill-runner/drill-runner.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'runner/:id', component: DrillRunnerComponent }
        ]),
        MaterialModule
    ],
    declarations: [
        DrillRunnerComponent
    ]
})
export class RunnerModule { }
