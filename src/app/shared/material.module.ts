import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class MaterialModule { }
