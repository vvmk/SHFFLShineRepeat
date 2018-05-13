import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutineListComponent } from './routine-list/routine-list.component';
import { RoutineListItemComponent } from './routine-list-item/routine-list-item.component';
import { RoutineViewComponent } from './routine-view/routine-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      RoutineListComponent,
      RoutineListItemComponent,
      RoutineViewComponent
  ]
})
export class RoutineModule { }
