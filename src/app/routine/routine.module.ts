import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RoutineListComponent } from './routine-list/routine-list.component';
import { RoutineListItemComponent } from './routine-list-item/routine-list-item.component';
import { RoutineViewComponent } from './routine-view/routine-view.component';
import { RoutineViewGuardService } from '../services/routine-view-guard.service';
import { LibraryPageComponent } from './library-page/library-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
        { 
            path: 'routine/:id',
            canActivate: [RoutineViewGuardService],
            component: RoutineViewComponent
        },
        {
            path: 'library',
            component: LibraryPageComponent
        }
    ])
  ],
  declarations: [
      LibraryPageComponent,
      RoutineListComponent,
      RoutineListItemComponent,
      RoutineViewComponent
  ]
})
export class RoutineModule { }
