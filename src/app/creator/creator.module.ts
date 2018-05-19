import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorPageComponent } from './creator-page/creator-page.component';
import { RoutineFormComponent } from './routine-form/routine-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreatorPageComponent, RoutineFormComponent]
})
export class CreatorModule { }
