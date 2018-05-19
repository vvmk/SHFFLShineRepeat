import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        MatSelectModule,
        MatFormFieldModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        MatSelectModule,
        MatFormFieldModule
    ]
})
export class MaterialModule { }
