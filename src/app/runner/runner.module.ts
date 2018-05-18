import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DrillRunnerComponent } from './drill-runner/drill-runner.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot([
            { path: 'runner/:id', component: DrillRunnerComponent }
        ])
    ],
    declarations: [
        DrillRunnerComponent
    ]
})
export class RunnerModule { }
