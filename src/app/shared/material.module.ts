import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule,
      MatCardModule,
      MatListModule,
      MatMenuModule
  ],
  exports: [
      MatButtonModule,
      MatCardModule,
      MatListModule,
      MatMenuModule
  ]
})
export class MaterialModule { }
