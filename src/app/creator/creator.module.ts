import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutineFormGuard } from '../services/routine-guard.service';
import { RoutineResolverService } from '../services/routine-resolver.service';
import { AuthGuardService } from '../services/auth-guard.service';

import { CreatorPageComponent } from './creator-page/creator-page.component';
import { RoutineFormComponent } from './routine-form/routine-form.component';
import { EditRoutineComponent } from './edit-routine/edit-routine.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: 'create',
                component: CreatorPageComponent,
                canActivate: [ AuthGuardService ]
            },
            {
                path: 'edit/:id',
                component: EditRoutineComponent,
                canActivate: [ AuthGuardService ],
                resolve: { routine: RoutineResolverService }
            }
        ])
    ],
    declarations: [CreatorPageComponent, RoutineFormComponent, EditRoutineComponent]
})
export class CreatorModule { }
