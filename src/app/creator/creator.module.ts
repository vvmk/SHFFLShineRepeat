import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CreatorPageComponent } from './creator-page/creator-page.component';
import { RoutineFormComponent } from './routine-form/routine-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
        { path: 'create', component: CreatorPageComponent }
    ])
  ],
  declarations: [CreatorPageComponent, RoutineFormComponent]
})
export class CreatorModule { }
