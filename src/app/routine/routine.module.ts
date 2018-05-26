import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

import { RoutineListComponent } from './routine-list/routine-list.component';
import { RoutineListItemComponent } from './routine-list-item/routine-list-item.component';
import { RoutineViewComponent } from './routine-view/routine-view.component';
import { RoutineViewGuard } from '../services/routine-guard.service';
import { LibraryPageComponent } from './library-page/library-page.component';
import { LibraryHeaderComponent } from './library-header/library-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
        {
            path: 'routine/:id',
            component: RoutineViewComponent
        },
        {
            path: 'library',
            component: LibraryPageComponent
        }
    ]),
    MaterialModule
  ],
  declarations: [
      LibraryPageComponent,
      RoutineListComponent,
      RoutineListItemComponent,
      RoutineViewComponent,
      LibraryHeaderComponent
  ]
})
export class RoutineModule { }
