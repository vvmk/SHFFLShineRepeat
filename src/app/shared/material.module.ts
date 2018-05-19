import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatListModule
} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule,
      MatCardModule,
      MatListModule
  ],
  exports: [
      MatButtonModule,
      MatCardModule,
      MatListModule
  ]
})
export class MaterialModule { }
