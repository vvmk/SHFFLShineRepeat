import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule,
      MatCardModule,
      MatListModule,
      MatToolbarModule
  ],
  exports: [
      MatButtonModule,
      MatCardModule,
      MatListModule,
      MatToolbarModule
  ]
})
export class MaterialModule { }
