import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RoutineListComponent } from './routine-list/routine-list.component';
import { RoutineListItemComponent } from './routine-list-item/routine-list-item.component';
import { RoutineViewComponent } from './routine-view/routine-view.component';
import { RoutineViewGuard } from '../services/routine-guard.service';
import { LibraryPageComponent } from './library-page/library-page.component';
import { LibraryHeaderComponent } from './library-header/library-header.component';
import { RoutineResolverService } from '../services/routine-resolver.service';
import { UserLibraryResolverService } from '../services/user-library-resolver.service';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    PipesModule,
    RouterModule.forChild([
      {
        path: 'routine/:id',
        component: RoutineViewComponent,
        resolve: { routine: RoutineResolverService }
      },
      {
        path: 'library/:id',
        component: LibraryPageComponent,
        resolve: { library: UserLibraryResolverService }
      }
    ])
  ],
  declarations: [
    LibraryPageComponent,
    RoutineListComponent,
    RoutineListItemComponent,
    RoutineViewComponent,
    LibraryHeaderComponent,
  ],
  providers: [
    RoutineResolverService,
  ]
})
export class RoutineModule { }
