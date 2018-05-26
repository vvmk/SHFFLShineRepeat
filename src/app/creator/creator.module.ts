import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { RoutineFormGuard } from '../services/routine-guard.service';

import { CreatorPageComponent } from './creator-page/creator-page.component';
import { RoutineFormComponent } from './routine-form/routine-form.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {
                path: 'create',
                canDeactivate: [ RoutineFormGuard ],
                component: CreatorPageComponent
            }
        ]),
        MaterialModule
    ],
    declarations: [CreatorPageComponent, RoutineFormComponent]
})
export class CreatorModule { }
